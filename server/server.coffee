util=require 'util'
temp=require 'temp'

class Settings

  @Port: 8000
  @MaxRows: 2048
  @Quality: 70

class Node
  @fs = require 'fs'
  @http = require 'http'
  @url = require 'url'
  @Mongolian = require 'mongolian'
  @util = require 'util'
  @path = require 'path'
  @execFile = require('child_process').execFile
  

###
HTTP Server
###
class Server

  start: ->
    server = Node.http.createServer this.handleRequest
    server.listen Settings.Port
    console.log "listening on #{Settings.Port}"

    @rendererCommand = "#{__dirname}/dcmj2pnm.exe"
    if not Node.path.existsSync @rendererCommand
      console.log "WARN: Cannot render images. Renderer not found at '#{@rendererCommand}'"
    else
      console.log "Using renderer: #{@rendererCommand}"

    @connect()

  connect: ->
    @server = new Node.Mongolian
    @db = @server.db("rm-navigator")
    @dicom = @server.db("dicom")

    @studies = @db.collection("study")
    @itemGroups = @db.collection("viewer.itemGroups")
    @items = @db.collection("viewer.items")
    
    @cache = @db.collection("cache")
    @documents = @dicom.collection("document")

  handleRequest: (request,response) =>

    url = Node.url.parse(request.url, true)
    
    if request.headers['if-none-match']
      response.statusCode = 304
      response.end()
      return


    if url.pathname == '/favicon.ico'
      response.writeHead 404
      response.end()
    else if url.pathname == '/studies/_search'
      console.log "request for #{url.pathname}#{url.search}"
      @searchStudies url.query.stuid, url.query.accno, response
    else if url.pathname == '/viewer/itemGroups'
      console.log "request for #{url.pathname}#{url.search}"
      @searchItemGroup url.query.stuid, response
    else if url.pathname == '/viewer/items'
      console.log "request for #{url.pathname}#{url.search}"
      @searchItems url.query.stuid, response
    else if url.pathname == '/viewer/item/_render'
      console.log "request for #{url.pathname}#{url.search}"
      @renderImage url.query.id,url.query.frame, response
    else
      console.log "request for #{url.pathname}"
      filePath = "#{__dirname}#{url.pathname}.json"
      @serveFile filePath, response

  renderImage: (itemId, frameOrImage, response) ->

    #filePath = "C:/Development/apps/curaapp/build/release/bin/app/images/series-005.jpg"
    #@serveFile filePath, response

    itemObjectId = new Node.Mongolian.ObjectId(itemId)

    @items.findOne "_id":itemObjectId , (err,item) =>

      if err
        @writeError response, err
        return

      if item.type == "dicomimage"
        @renderSingleImage item.sopUid, frameOrImage, response
      else if item.type == "multiframe"
        @renderSingleImage item.sopUid, frameOrImage, response
      else if item.type == "dicomimages"
        @renderImageFromImageSeries item, frameOrImage, response
      else
        @writeError response, "Unknown item type to render '#{item.type}'"
  
  renderImageFromImageSeries: (viewerItem, imageIndex, response) ->

    if viewerItem.imageCount != viewerItem.docs.length
      @writeError response, "viewerItem docs invalid. Ranges dont match.", 500
      return

    if imageIndex < 0 || imageIndex >= viewerItem.imageCount 
      @writeError response, "Index out of range: #{imageIndex} (Allowed:#{viewerItem.imageCount})", 406
      return

    docId = viewerItem.docs[imageIndex]
    
    @documents.findOne "_id":docId, (err,doc) =>
      
      if err
        @writeError response, err
        return

      @renderImageFromDocument_(response, doc)

  renderSingleImage: (sopUid, frame, response) ->

    @documents.findOne uid:sopUid, (err,doc) =>
      
      if err
        @writeError response, err
        return

      @renderImageFromDocument_(response, doc, frame)

  renderImageFromDocument_: (response, doc, frame = 0) ->

    if not doc
      @writeError response, "Could not render image. no document"
      return

    maxRows = Settings.MaxRows
    quality = Settings.Quality

    rows = parseInt( doc.ds["00280010"] )
    rowsToRender = Math.min( maxRows, rows )

    path = doc.path

    Node.path.exists path, (exists) =>
    
      if not exists
        path = Node.path.join "c:/Development/apps/dicomserver/build/release", path
        if not Node.path.existsSync path
          @writeError response, "File not found: #{path}", 404
          return

      outputPath = temp.path suffix:'.jpg'
      
      
      args = @getDcmj2pnmRendererArguments path, outputPath, rowsToRender, frame, quality
      opts = { cwd: process.cwd() }
      
      #util.log "Rendering #{util.inspect args}"

      renderer = Node.execFile @rendererCommand, args, opts, (code, stdout, stderr) =>
        Node.path.exists outputPath, (outputExists) =>
          if not outputExists
            console.log "STDOUT: " + stdout
            console.log "STDERR: " + stderr
            @writeError response, "Could not render image #{util.inspect(args)}"

            return

          s = Node.fs.createReadStream(outputPath)
          s.on "error", () -> @writeError "Could not serve file: #{outputPath}"
          s.on "end", () -> Node.fs.unlink outputPath

          response.writeHead 200, {
              'Content-Type':'image/jpeg',
              'Access-Control-Allow-Origin': '*'
              'Access-Control-Allow-Methods': 'POST, GET'
              'ETag': doc.uid
              'Cache-Control': 'max-age=86400'
            }
          s.pipe response

  getDcmj2pnmRendererArguments: (path, outputPath, rows=0, frame=0, quality=90) ->  

    args = ['+oj', '+Wi', '1', '+F', "#{frame}", "+Jq", "#{quality}"]

    if rows > 0
      args.push "+Syv"
      args.push "#{rows}"
      
    args.push path
    args.push outputPath

    return args

  searchItems: (studyUid, response) ->

    Node.util.log "Searching for viewer items '#{studyUid}'"

    gq = @itemGroups.find studyUid: studyUid
    gq.sort '_id':-1
    gq.toArray (err, itemGroups) =>

      if err or itemGroups.length == 0
          @writeError response, err 
          return

      itemGroup = itemGroups[0]
      itemGroupId = itemGroup._id

      q = @items.find groupId: itemGroupId
      q.sort 'seriesNumber':1,'performed-at':1

      q.toArray (err,items) =>
        if err
          @writeError response, err 
          return

        if items.length == 0
          response.end 404
        else
          
          for item in items
            @stripIdFields item   
            item.groupId = item.groupId.toString()      
            item.docs = undefined
            
          response.writeHead 200, {
              'Content-Type':'application/json',
              'Access-Control-Allow-Origin': '*'
              'Access-Control-Allow-Methods': 'POST, GET'
            }
          response.end JSON.stringify(items:items)
          

  searchItemGroup: (studyUid, response) ->

    Node.util.log "Searching for viewer itemGroup '#{studyUid}'"

    q = @itemGroups.find studyUid: studyUid
    q.sort '_id':-1
    q.limit 1

    q.toArray (err,groups) =>
      if err
        @writeError response, err 
        return

      if groups.length == 0
        response.end 404
      else
        
        group = @stripIdFields groups[0]
        @stripIdFields group

        for item in group.items
            @stripIdFields item 

        response.writeHead 200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
            'Access-Control-Allow-Methods': 'POST, GET'
          }

        response.end  JSON.stringify(group)

  searchStudies: (studyUids, accNumbers, response) ->

    if studyUids instanceof Array
      studyQuery = @studies.find {
        uid: 
          '$in':studyUids
        }     
    else if accNumbers instanceof Array
      studyQuery = @studies.find {
        accno: 
          '$in':accNumbers
        }     
    else
      if studyUids
        studyQuery = @studies.find studyUid:studyUids 
      else if accNumbers
        studyQuery = @studies.find accno:accNumbers

    studyQuery.sort 'performed-at':-1
    
    studyQuery.toArray (err,array) =>

      if err
        @writeError response, err 
        return

      studiesFound = (@stripStudyIdFields(s) for s in array)

      util.log "returning study '#{s.uid}' (#{s['performed-at']} '#{s.desc}')" for s in array
    
      result = 'studies': studiesFound

      response.writeHead 200, {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
          'Access-Control-Allow-Methods': 'POST, GET'
        }

      response.end  JSON.stringify(result)

  writeError: (response, err, code = 500) ->
    Node.util.log "Error processing request:" + Node.util.inspect err
    response.writeHead code
    response.end()

  stripStudyIdFields: (study) ->
    study._id = study._id.toString()
    study.id = study.studyid.toString()
    return study

  stripIdFields: (document) ->
    document._id = document._id.toString()
    return document

  serveFile: (path, response, mime = "application/json", deleteAfterServing = false) =>    
    console.log "trying to serve file #{path}"
    Node.fs.readFile path, this.createFileContentSenderHandler(response, deleteAfterServing)

  createFileContentSenderHandler: (response, mime, deleteAfterServing) ->     

    contentHandler = (error,content) =>
      if(error)
        console.log "#{error}"
        response.writeHead 500
        response.end()
      else
        response.writeHead 200, {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
          'Access-Control-Allow-Methods': 'POST, GET'
        }

        response.end content, 'utf-8'   


    return contentHandler
  
###
Main
###
module.exports.Server = Server