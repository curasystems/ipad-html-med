class Settings

  @Port: 8000

class Node
  @fs = require 'fs'
  @http = require 'http'
  @url = require 'url'

###
HTTP Server
###
class Server

  start: ->
    server = Node.http.createServer this.handleRequest
    server.listen Settings.Port
    console.log "listening on #{Settings.Port}"

  handleRequest: (request,response) =>
    pathname = Node.url.parse(request.url).pathname
    
    if pathname == '/favicon.ico'
      response.writeHead 404
      response.end()
    else
      console.log "request for #{pathname}"
      filePath = "#{__dirname}#{pathname}.json"
      this.serveFile filePath, response

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