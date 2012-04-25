include readModels.Studies
include templates.dicom.studies
include pages.Viewer

include goog.dom
include goog.events

###*
  * a simple ipad application which renders one of two pages.
  *
  *  
 ###
class ipad.StudyApplication

  constructor: (@query) ->
    
  displayIn: (containerElementId) ->

    @containerElement = goog.dom.getElement containerElementId

    m = new readModels.Studies()    
    me = this
    
    renderCallback = (studyList) -> me.displayStudyList studyList
    errorCallback = (status) -> 
      goog.dom.setTextContent me.containerElement, "Momentan keine Daten verfügbar #{status}"
      return true

    if @query
      studies = m.getPatientStudies @query, renderCallback, errorCallback
    else
      studies = m.getRecent renderCallback, errorCallback                      
    
  displayStudyList: (studyList) ->
    
    gs = @groupStudiesIntoTodayAndOlder studyList.studies
    goog.soy.renderElement @containerElement, templates.dicom.studies.groupedList, groupedStudies:gs

    @subscribeToItemEvents()
  
  subscribeToItemEvents: ->
    for item in @getAllStudyItemsInContainer()
      @listenTo item 

  listenTo: (item) ->

    args =
      study:item.id
      containerElement:@containerElement

    goog.events.listen item, goog.events.EventType.CLICK, @onOpenStudy, false, args

  onOpenStudy: (e) ->    
    viewer = new pages.Viewer(this.id)
    viewer.init()
    viewer.renderFullscreen()

  getAllStudyItemsInContainer: ->
    goog.dom.getElementsByTagNameAndClass 'li', 'dicom_studies_list_item', @containerElement

  groupStudiesIntoTodayAndOlder: (studies) ->

    today:
      title: 'Heute'
      studies: @adornStudy(s) for s in studies when s.hasBeenPerformedToday()
    older:
      title: 'Frühere Untersuchungen'
      studies: @adornStudy(s) for s in studies when not s.hasBeenPerformedToday()

  ###*
   * Adorn the study with date&time info
   ###
  adornStudy: (s) ->
    if s.hasBeenPerformedToday()
      s.type = 'time'
      s.performed = s.performedAt.toString('hh:mm:ss')
    else
      s.type = 'date'
      s.performed = s.performedAt.toString('dd.MM.yy')
     
    return s

ipad.EventType = 
  NAVIGATETOLIST: 'navigatetolist'

###
class ipad.page.StudyViewer extends goog.events.EventTarget

  constructor: (@studyId) ->
   
  displayIn: (containerElement) ->
    @containerElement = goog.dom.getElement containerElement

    goog.soy.renderElement @containerElement, templates.dicom.study.viewer.view, study: id:@studyId
###