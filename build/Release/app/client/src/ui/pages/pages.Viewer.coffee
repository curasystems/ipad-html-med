include goog.dom
include goog.dom.classes
include goog.style
include goog.soy

include readModels.Viewer
include parts.studies
include examples.simple

include templates.dicom.viewer

class pages.Viewer

  ###*
    @param {string} studyId Id of study in readmodel to render items of
  ###

  constructor: (@studyId) ->
    
    @PhotoSwipe = window['Code']['PhotoSwipe']
    @rm_ = null
      
    @titleBar_ = null
    @titleBarCaption_ = null

  ###*
    @param {readModels.Viewer=} opt_rm readmodel to use or undefined for default   
  ###  
  init: (opt_rm) ->
    @rm_ = opt_rm ? new readModels.Viewer()

  insertTitleBar_: () ->        
    @titleBar_ = goog.soy.renderAsElement templates.dicom.viewer.titleBar      
    
    body = goog.dom.getDocument().body
    goog.dom.appendChild(body, @titleBar_)

    @titleBarCaption_ = goog.dom.getElementByClass 'dicom-viewer-titleBar-caption', @titleBar_

  removeTitleBar_: () ->
    goog.dom.removeNode(@titleBar_)

  renderFullscreen: () ->
    
    @insertTitleBar_()

    me = this

    @rm_.getStudyItems @studyId, (err,items) ->

      options =
          preventHide: false
          minUserZoom: 0.9
          margin:50
          jQueryMobile: false
          captionAndToolbarShowEmptyCaptions: false
          getImageSource: (obj) -> obj.imageUrl
          getImageCaption: (obj) -> '' #obj.title
          getImageMetaData: (obj) -> obj
        
      instance = me.PhotoSwipe['attach']( items, options )

      
      cleanup = () ->
        me.removeTitleBar_()

      onDisplayImage = () -> 
        image = instance['getCurrentImage']()
        goog.dom.setTextContent me.titleBarCaption_, image['metaData'].title

      instance['addEventHandler']( me.PhotoSwipe['EventTypes']['onHide'], cleanup )
      instance['addEventHandler']( me.PhotoSwipe['EventTypes']['onDisplayImage'], onDisplayImage )
      
      instance.show(0)
    ###


    
