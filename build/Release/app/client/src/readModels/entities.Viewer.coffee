class entities.Viewer.Item
  constructor: (@id, @type, @description, @modality, @frameCount, @performedAt, @number, @documentUrl, @thumbUrl, @imageUrl, @width, @height ) ->

class entities.Viewer.ItemGroupStudy
  constructor: (@id, @description, @modalities, @performedAt, @studyId, @uid, @accno, @items) ->
    @type = 'study'