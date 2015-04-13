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

Router.route 'Signin', name: 'Signin'

Router.map ->
  @route '/diary/:_id',
    name: 'Diary.show'
    controller: 'DiarysController'
    action: 'action'
    where: 'client'

