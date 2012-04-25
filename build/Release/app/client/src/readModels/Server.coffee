include goog.net.XhrIo
include goog.json
include goog.net.HttpStatus

class Server
  constructor: (@serverUrl) ->

  get: (relativeUrl, callback) ->
    
    # When using the ipad Cross-Origin-Policy denies this
    url = "#{@serverUrl}#{relativeUrl}"
    #url = "#{relativeUrl}"

    #xhr = goog.net
    #console.log "getting url #{url}"
    
    try
      goog.net.XhrIo.send url, @callback_(callback)  
    catch error
      console.log error
    

  post: (relativeUrl, callback, data) ->
    url = "#{@serverUrl}#{relativeUrl}"

    #xhr = goog.net
    goog.net.XhrIo.send url, @callback_(callback), 'POST', data

  put: (relativeUrl, callback, data) ->
    url = "#{@serverUrl}#{relativeUrl}"    
    goog.net.XhrIo.send url, @callback_(callback), 'PUT', data, {"Content-Type":"application/json"}

  delete: (relativeUrl, callback) ->
    url = "#{@serverUrl}#{relativeUrl}" 
    goog.net.XhrIo.send url, @callback_(callback), 'DELETE'

  callback_: (callback) ->
    return (e) ->
      xhr = e.target
      status = xhr.getStatus()
      if goog.net.HttpStatus.isSuccess( status ) and xhr.getResponseText()
        json = xhr.getResponseJson()     
        callback(json,status)
      else
        console.log "error getting result:#{status}"
        callback(null,status)

class ContinuousServer

  constructor: (serverUrl) ->
    @server_ = new Server(serverUrl)

  get: (relativeUrl, callback, errorCallback) ->
    me = this
    @server_.get relativeUrl, (json,status) -> me.onResult relativeUrl, callback, errorCallback, json, status
    
  onResult: ( relativeUrl, callback, errorCallback, json, status ) ->
      if json?
        callback json
      else
        console.log "Error reading from #{relativeUrl} => #{status}"
        me = this
        setTimeout( ()->
            
            doRetry = true

            if errorCallback?
              doRetry = errorCallback(status)
            
            if doRetry
              me.retry(relativeUrl, callback, errorCallback) 

            return
          , 1000 )

  retry: (relativeUrl, callback, errorCallback) ->
     @get(relativeUrl, callback, errorCallback)