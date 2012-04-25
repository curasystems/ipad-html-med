include app.Settings
include Server

include entities.Viewer.Item
include entities.Viewer.ItemGroupStudy

class readModels.Viewer
  
  getStudyItems: (studyId, callback) ->

    callback null,
      [
        {
          imageUrl:'/src/ui/pages/dummy.jpg'
          title: '1'
        },
        {
          imageUrl:'/src/ui/pages/dummy.jpg'
          title: '2'
        },
      ]

    ###
    s = new ContinuousServer(app.Settings.SERVER_URL())
    s.get "/viewer/studies/#{studyId}"
      , ((json) -> callback(null, new entities.Viewer.ItemGroupStudy(json)))
      , ((err) -> callback(err))
    ###
  