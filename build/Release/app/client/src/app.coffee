include goog.dom as dom
include pages.CurrentStudyPage

class Application

  constructor: (@title) -> 

  start: (pageDivId) ->
    pageElement = dom.getElement pageDivId

    page = new pages.CurrentStudyPage
    page.renderInto pageElement 



    