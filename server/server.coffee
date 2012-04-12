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

  handleRequest: (request,response) =>
    url = Node.url.parse(request.url, true)
        
    if url.pathname == '/favicon.ico'
      response.writeHead 404
      response.end()
    if url.pathname == '/studies/_search'
      console.log "request for #{url.pathname}#{url.search}"
      @searchStudies url.query.stuid, url.query.accno, response
    else
      console.log "request for #{url.pathname}"
      filePath = "#{__dirname}#{url.pathname}.json"
      @serveFile filePath, response

  searchStudies: (studyUids, accNumbers, response) =>

    Node.util.log Node.util.inspect studyUids

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
      studyQuery = @studies.find uid:studyUids


    studyQuery.sort 'performed-at':-1
    
    studyQuery.toArray (err,array) =>

      if err
        @writeError err 
        return

      studiesFound = (@stripIdFields(s) for s in array)

      result = 'studies': studiesFound

      response.writeHead 200, {
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin': '*'
          'Access-Control-Allow-Methods': 'POST, GET'
        }

      response.end  JSON.stringify(result)

  writeError: (err) ->
    Node.util.log "Error processing request:" + Node.util.inspect err

  stripIdFields: (study) ->
    study._id = undefined
    study.id = study.id.toString()
    return study

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