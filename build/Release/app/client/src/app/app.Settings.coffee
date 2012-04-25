include Server

class app.Settings

  # Settings used directly must be mapped. settings.json is no compiled and thus not renamed!
  @SERVER_URL: () -> app.Settings['serverUrl'] # 'http://localhost:8000'

  ###
  Methods
  ###  
  @init: (cb) ->
    app.Settings.loadFromRelativePath 'settings.json', cb

  @loadFromRelativePath: (path, cb) ->
    s = new Server('./')
    s.get path, (settingsJson, status) -> app.Settings.onSettingsLoaded(settingsJson,status,cb)

  @onSettingsLoaded: (settingsJson, status, cb) ->
    if settingsJson
      app.Settings.mergeAllSettingsIntoGlobalSettingsObject settingsJson
      cb(null, app.Settings)
    else 
      console.log "Could not load settings: #{status}"
      cb(status, app.Settings)

  @mergeAllSettingsIntoGlobalSettingsObject: (settingsJson) ->
    app.ObjectHelper.mergeObject app.Settings, settingsJson
    console.log "serverUrl: #{app.Settings.SERVER_URL()}"
    
class app.ObjectHelper
  @mergeObject: (dst,src) ->
    for own key, value of src
      console.log "mapping #{key} = #{value}"
      dst[key] = value
