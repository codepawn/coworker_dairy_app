Router.configure
  layoutTemplate: 'MasterLayout'
  loadingTemplate: 'Loading'
  notFoundTemplate: 'NotFound'

Router.route '/',
  name: 'home'
  controller: 'HomeController'
  action: 'action'
  where: 'client'

Router.route 'Post'

Router.route 'Diarys'

Router.route 'Approval'

Router.route 'Signup'

Router.route '/diary/:_id', (->
  @render 'Diarysitemlist', data: ->
    Diarys.findOne _id: @params._id
), name: 'Diary.show'
Router.route 'Signin', name: 'Signin'
