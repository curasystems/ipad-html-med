include goog.dom as dom
include goog.events as events

class curaapp.Textarea extends goog.ui.Textarea
  constructor: (@inputPaneId, @outputPaneId)->
    super ''
    
    @decorate goog.dom.getElement @inputPaneId
    @converter = new Showdown.converter
    @resetHeight()
    @initEvents()
    @convertText()
    
  initEvents: ->
    events.listen @getElement(), events.EventType.INPUT, @convertText, true, @
    events.listen window, events.EventType.RESIZE, @resetHeight, true, @
    events.listen dom.getElement('getJsonBtn'), events.EventType.CLICK, @parseValuesAsJson, true, @
    events.listen dom.getElement('loadJsonBtn'), events.EventType.CLICK, @loadTestData, true, @
    events.listen dom.getElement('toggleEditableBtn'), events.EventType.CLICK, @toggleEditableFields, true, @
    events.listen dom.getElement('saveFormBtn'), events.EventType.CLICK, @saveForm, true, @

  convertText: ->
    text = @getValue()
    # Common converter
    @common = new Common
    text = @common.parseText text
    # Showdown converter
    text = @converter.makeHtml text
    text = "<form id=\"output-form\">\n#{text}</form>\n"
    dom.getElement(@outputPaneId).innerHTML = text
  
  loadFormDescription: (e)->
    @convertText()
    @currentForm = e.currentTarget.getSelectedItem().attributes

  getWindowHeight: ->
    if window.innerHeight
      window.innerHeight
    else if document.documentElement and document.documentElement.clientHeight
      document.documentElement.clientHeight
    else document.body.clientHeight if document.body
    
  resetHeight: ->
    height = @getWindowHeight() - 130
    @setMinHeight height
    @setMaxHeight height
    #goog.style.setHeight @getElement(), height
    goog.style.setHeight dom.getElement(@outputPaneId), height

  parseValuesAsJson: ->
    form = dom.getElement "output-form"
    inp = form.getElementsByTagName "input"
    sel = form.getElementsByTagName "select"
    tex = form.getElementsByTagName "textarea"
    parts = {}
    for item in sel
      fieldValue = if isNaN(item.value) then item.value else Number(item.value)
      parts[item.name] = fieldValue if item.name
    for item in tex
      parts[item.name] = item.value if item.name
    for item in inp when item.name
      fieldValue = if isNaN(item.value) then item.value else Number(item.value)
      parts[item.name] = fieldValue if (item.type isnt "checkbox" and item.type isnt "radio") or item.checked
    alert JSON.stringify(parts, null, "\t")

  toggleEditableFields:->
    form = dom.getElement "output-form"
    inp = form.getElementsByTagName "input"
    sel = form.getElementsByTagName "select"
    tex = form.getElementsByTagName "textarea"
    for item in inp when item.name
      @setReadOnly item
    for item in sel when item.name
      @setReadOnly item
    for item in tex when item.name
      @setReadOnly item     

  setReadOnly: (item)->
    toggle = dom.classes.toggle item, "readOnlyInput"
    if toggle 
      item.setAttribute "readonly", "readonly" 
    #else if @common.readOnlyFields.indexOf(item.name) is -1 
    #  item.removeAttribute "readonly"

  saveForm: ->
    if @currentForm
      server = new Server "#{app.Settings.SERVER_URL()}"
      server.put "/forms#{@currentForm.uri}", @saveFormResponseHandler_(this), JSON.stringify("content": @getValue())

  saveFormResponseHandler_: (me) ->
    return (response)->
      noty 
        text: 'form saved successfully'
        type: 'success'
        timeout: 500
        ###
        animateOpen:
          height: "toggle"
        animateClose: 
          height: "toggle"
        ###
      #noty({"text":"Hi! I'm an example text. When I grow up I want to be a noty message.","layout":"top","type":"success","textAlign":"center","easing":"swing","animateOpen":{"height":"toggle"},"animateClose":{"height":"toggle"},"speed":"500","timeout":"5000","closable":true,"closeOnSelfClick":false}) 

  loadTestData: ->
    testData =
      mrmrainline: "8"
      mrmra: "1"
      mrdif: "1"
      mrdsei: "3"
      mrsaspa1d: "4"
      mrinft: "2"
      mrdant: "1"
      mrdpos: "8"
      mrflai: "9"
      mrfmik: "0"
      mrftea: "1"
      mrfcom: "test kommentar"
      hauch: "bla bla"
      mrdifnuminline: "138"
      Geburtsdatum: "10.10.1980"
      mrdifnum: "10"
      mrdvol: "4"
      mrfwfr: "23"
      mrfwpr: "111"
      mrfwtr: "1"
      mrfwbr: "3"
      mrfwir: "5"
      mrfwsr: "143"
      mrfwfl: "4"
      mrfwpl: "88"
      mrfwtl: "44"
      mrfwbl: "33"
      mrfwil: "55"
      mrfwsl: "224"
    #alert JSON.stringify testData, null, "\t"
    $('#output-form').populate testData
