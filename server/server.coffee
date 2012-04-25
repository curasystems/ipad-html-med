util = require 'util'

class Settings

  @Port: 8000

class Node
  @fs = require 'fs'
  @http = require 'http'
  @url = require 'url'
  @Mongolian = require 'mongolian'
  @util = require 'util'

###
HTTP Server
###
class Server

  start: ->
    server = Node.http.createServer this.handleRequest
    server.listen Settings.Port
    console.log "listening on #{Settings.Port}"

    @connect()

  connect: ->
    @server = new Node.Mongolian
    @db = @server.db("rm-navigator")
    @studies = @db.collection("study")
    @itemGroups = @db.collection("viewer.itemGroups")
    @items = @db.collection("viewer.items")

  handleRequest: (request,response) =>
    url = Node.url.parse(request.url, true)
      
    if url.pathname == '/favicon.ico'
      response.writeHead 404
      response.end()
    else if url.pathname == '/studies/_search'
      console.log "request for #{url.pathname}#{url.search}"
      @searchStudies url.query.stuid, url.query.accno, response
    else if url.pathname == '/viewer/itemGroups'
      console.log "request for #{url.pathname}#{url.search}"
      @searchItemGroup url.query.stuid, response
    else
      console.log "request for #{url.pathname}"
      filePath = "#{__dirname}#{url.pathname}.json"
      @serveFile filePath, response

  searchItemGroup: (studyUid, response) =>

    Node.util.log "Searching for viewer itemGroup '#{studyUid}'"

    q = @itemGroups.find studyUid: studyUid
    q.sort '_id':-1
    q.limit 1

    q.toArray (err,items) =>
      if err
        @writeError err 
        return

      if items.length == 0
        response.end 404
      else
        response.writeHead 200, {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin': '*'
            'Access-Control-Allow-Methods': 'POST, GET'
          }

        item = @stripIdFields items[0]

        @stripIdFields viewerItem for viewerItem in item.items

        util.log util.inspect item
        response.end  JSON.stringify(item)

  searchStudies: (studyUids, accNumbers, response) =>

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
        studyQuery = @studies.find uid:studyUids 
      else if accNumbers
        studyQuery = @studies.find accno:accNumbers

    studyQuery.sort 'performed-at':-1
    
    studyQuery.toArray (err,array) =>

      if err
        @writeError err 
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

  writeError: (err) ->
    Node.util.log "Error processing request:" + Node.util.inspect err

  stripStudyIdFields: (study) ->
    study._id = undefined
    study.id = study.studyid.toString()
    return study

  stripIdFields: (document) ->
    document._id = undefined
    return document

  serveFile: (path, response) =>    
    console.log "trying to serve file #{path}"
    Node.fs.readFile path, this.createFileContentSenderHandler(response)

  createFileContentSenderHandler: (response) =>     

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