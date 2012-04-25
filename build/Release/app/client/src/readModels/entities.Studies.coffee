class entities.Series
  constructor: (@id, @thumbUrl, @thumbDataUri) ->

class entities.Study
  constructor: (@id, @modality, @description, performedAtUtcFormatted, @series) ->    
    @performedAt = new Date(performedAtUtcFormatted)
        
  hasBeenPerformedToday: ->
    try      
      today = new Date()
      
      @performedAt.getDate() == today.getDate() &&
      @performedAt.getMonth() == today.getMonth() &&
      @performedAt.getYear() == today.getYear()      
    catch error
      false


class entities.Studies
  constructor: (json) ->
    @tryBuildFromServerStudies json['studies']  
    
  studies: []

  tryBuildFromServerStudies: (serverStudies) ->
    try
      @buildFromServerStudies serverStudies
    catch error
      console.log error
      return

  buildFromServerStudies: (serverStudies) ->
    
    @studies.push(@buildStudy s) for s in serverStudies

  buildStudy: (serverStudy) ->
    new entities.Study(
              serverStudy['id'],
              serverStudy['modality'],
              serverStudy['description'],
              serverStudy['performed-at'],
              @buildSeries s for s in serverStudy['series'])

  buildSeries: (serverSeries) ->
    new entities.Series(
            serverSeries['id'],
            serverSeries['thumbUrl'],
            serverSeries['thumbDataUri']
            )
  