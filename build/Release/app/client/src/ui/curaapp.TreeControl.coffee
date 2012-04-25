include goog.dom as dom
include goog.events as events
include goog.net.XhrIo
include goog.net.HttpStatus
include goog.ui.Prompt
include goog.ui.Dialog
include app.Settings

class curaapp.TreeControl extends goog.ui.tree.TreeControl
  constructor: (@divId)->
    customConfig = goog.ui.tree.TreeControl.defaultConfig
    customConfig.cleardotPath = "images/tree/cleardot.gif"
    
    super "/", customConfig

    @getAllForms()
    @createDom()
    dom.getElement(@divId).appendChild @getElement()
    @enterDocument()
    @initEvents()

  getAllForms: ->
    server = new Server "#{app.Settings.SERVER_URL()}"
    @removeChildren()
    server.get '/forms', @getAllFormsResponseHandler_(this)

  getAllFormsResponseHandler_: (node) ->
    # define attributes for the root
    node.attributes = {"uri": "/"}
    return (response) ->
      curaapp.TreeControl.createTreeFromJSON node, response
      if node.currentPath
        node.forEachChild curaapp.TreeControl.selectNodeByUri( node.currentPath )
        node.getForm node.currentPath

  @selectNodeByUri: (uri)->
    return (node) ->
      if node.hasChildren()
        node.forEachChild curaapp.TreeControl.selectNodeByUri(uri)
      else
        if node.attributes.uri is uri
          node.reveal()
          node.select()          

  @createTreeFromJSON: (parentNode, data) -> 
    for element in data
      curaapp.TreeControl.addChildToTree(parentNode, element)

  @addChildToTree: (parentNode, element) ->
    childNode = parentNode.getTree().createNode element.name
    #childNode.attributes = {}
    childNode.attributes = element
    parentNode.add childNode

    if element.children
      parentNode.setIconClass "goog-tree-icon goog-tree-collapsed-folder-icon"
      curaapp.TreeControl.createTreeFromJSON childNode, element.children

  initEvents: ->
    events.listen @getElement(), events.EventType.CLICK, @onNodeClick, true, @
    events.listen dom.getElement('createFormBtn'), events.EventType.CLICK, @createForm, true, @
    events.listen dom.getElement('resetFormBtn'), events.EventType.CLICK, @resetForm, true, @
    events.listen dom.getElement('deleteFormBtn'), events.EventType.CLICK, @deleteForm, true, @

  onNodeClick: (e) ->
    node = @getNodeFromEvent_ e
    #node.setAfterLabelHtml "++"
    if not node.hasChildren()
      @getForm node.attributes.uri
      @currentPath = node.attributes.uri
    #console.info events.getTotalListenerCount()

  createFormCallback: (e, f) ->

  getForm: (formId) ->
    server = new Server "#{app.Settings.SERVER_URL()}"
    server.get "/forms#{formId}", @getFormResponseHandler_(this)

  getFormResponseHandler_: (tree) ->
    return (response) ->
      if response
        inputPane = dom.getElement 'inputPane'
        inputPane.value = response.definition.content
        # get the current version
        tree.getSelectedItem().attributes.version = response.version
        tree.getSelectedItem().attributes.parentUri = response.parentUri
        tree.dispatchEvent 'FORM_SELECTED'

  createForm: () ->
    prompt = new goog.ui.Prompt 'Information Required', 'Form name', goog.bind(@promptHandler_, this)
    prompt.setValidationFunction @validateFormName      
    prompt.setVisible true

  validateFormName: (input) ->
    return input.length

  promptHandler_: (response) ->
    formObj = @getSelectedItem().attributes
    if formObj and response
      formPath = if formObj.uri is '/' or formObj.children.length then formObj.uri else formObj.parentUri
      formPath = if formPath is '/' then '' else formPath
      @currentPath = "#{formPath}/#{response}"
      server = new Server "#{app.Settings.SERVER_URL()}"
      server.post "/forms#{formPath}/#{response}", @createFormResponseHandler_(this), '{"content":""}'

  createFormResponseHandler_: (tree) ->
    return (response) ->
      tree.getAllForms()
      noty 
        text: 'form created successfully'
        type: 'success'
        timeout: 500

  resetForm: ->
    if @currentPath
      @forEachChild curaapp.TreeControl.selectNodeByUri( @currentPath )
      @getForm @currentPath

  deleteForm: ->
    if @currentPath
      deleteFormConfirmationDialog = new goog.ui.Dialog()
      deleteFormConfirmationDialog.setContent 'Are you sure you want to delete this form?'
      deleteFormConfirmationDialog.setButtonSet goog.ui.Dialog.ButtonSet.createYesNo()
      deleteFormConfirmationDialog.setVisible true

      goog.events.listen deleteFormConfirmationDialog, goog.ui.Dialog.EventType.SELECT, goog.bind(@deleteFormConfirmationHandler_, this)
    else 
      alert 'No form selected'

  deleteFormConfirmationHandler_: (e) ->
    if e.key is 'yes'
      server = new Server "#{app.Settings.SERVER_URL()}"
      server.delete "/forms#{@currentPath}", @deleteFormResponseHandler_(this)

  deleteFormResponseHandler_: (tree) ->
    return (response) ->
      tree.currentPath = tree.getFirstChild().attributes.uri
      tree.getAllForms()
      noty 
        text: 'form deleted successfully'
        type: 'success'
        timeout: 500
