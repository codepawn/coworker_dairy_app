@HomeController = RouteController.extend(
  layoutTemplate: 'MasterLayout'
  subscriptions: ->
    @subscribe 'diarys'
  action: ->
    @render 'Home'
)
