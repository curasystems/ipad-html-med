include app.Settings
include Server
include entities.Studies

class readModels.Studies
  search: (query, callback) ->
    s = new Server(app.Settings.SERVER_URL())
    s.get "/studies/_search?#{query}", (json) -> callback (new entities.Studies(json))
  
  getRecent: (callback, errorCallback) ->
    s = new ContinuousServer(app.Settings.SERVER_URL())
    s.get '/studies/recent', ((json) -> callback (new entities.Studies(json))), errorCallback
  
  getPatientStudies: (query, callback, errorCallback) ->
    s = new ContinuousServer(app.Settings.SERVER_URL())
    s.get "/studies/_search?#{query}", ((json) -> callback(new entities.Studies(json)) ), errorCallback
    