include pages.Viewer

class pages.ViewerSpecs

class TestReadmodel
  constructor: ->
    @getStudyItemsCalls = 0

  getStudyItems: () ->
    @getStudyItemsCalls++

    [
      {
        'id':'123',
        'type': 'study'
      }
    ]

describe "Viewer Page", ->

  beforeEach ->
    @rm = new TestReadmodel()

  it "should query the readmodel", ->

    v = new pages.Viewer('1')   
    v.init(@rm)
    v.renderFullscreen()

    expect( @rm.getStudyItemsCalls ).toEqual(1)


