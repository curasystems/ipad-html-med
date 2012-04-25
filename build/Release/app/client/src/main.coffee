include Application
include app.Settings
include ipad.StudyApplication
include curaapp.Textarea
include curaapp.TreeControl
include goog.events as events
include goog.Uri
include Common

###

The startup class contains the static main function. This is where the app is initialized and parameters are passed into the app (if any parameters are passed in from a host)

###

class ipad.StudyApp

  ###*
    * @param {string} containerTagId
    * @param {string} query -- the url parameters to use for study query 
   ###
  @start: (containerTagId, query) ->

    console.log '> started'

    if query 
      queryUri = new goog.Uri(query)
      studyQuery = queryUri.getEncodedQuery()

    app.Settings.init (err) ->

      if !err 
        a = new ipad.StudyApplication(studyQuery)    
        a.displayIn containerTagId
        console.log '< started'
      else
        console.log 'COULD NOT INITIALIZE SETTINGS'
    return

  ###*
    * @param {string} treeContainerId
    * @param {string} inputContainerId
    * @param {string} outputContainerId
   ###
  @startFormEditor: (treeContainerId, inputContainerId, outputContainerId) ->

    console.log 'startFormEditor'

    app.Settings.init (err) ->

      if !err 
        tree = new curaapp.TreeControl(treeContainerId)
        inputPane = new curaapp.Textarea(inputContainerId, outputContainerId)
        events.listen tree, 'FORM_SELECTED', inputPane.loadFormDescription, true, inputPane
      else
        console.log 'COULD NOT INITIALIZE SETTINGS'
    return

goog.exportSymbol 'cura.ipad.studylist.start', ipad.StudyApp.start
goog.exportSymbol 'ipad.StudyApp.startFormEditor', ipad.StudyApp.startFormEditor