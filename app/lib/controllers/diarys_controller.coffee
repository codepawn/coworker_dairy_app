@DiarysController = RouteController.extend
  subscriptions: ->
    @subscribe 'diary', @params._id

  data: ->
    Diarys.findOne _id: @params._id

  action: ->
    @render "Diarysitemlist", {}
