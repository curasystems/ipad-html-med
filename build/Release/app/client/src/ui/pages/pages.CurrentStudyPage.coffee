include goog.dom
include goog.soy


include readModels.Studies
include parts.studies
include examples.simple

class pages.CurrentStudyPage

  renderInto: (element) ->

    model = new readModels.Studies()

    renderCallback = (result)->    
        console.log result.studies
        goog.soy.renderElement element, parts.studies.list, {studies:result.studies}
    errorCallback = (err) -> true

    model.getRecent renderCallback, errorCallback

