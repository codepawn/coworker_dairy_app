# Client and Server Routes

Router.configure
  layoutTemplate: "MasterLayout"
  loadingTemplate: "Loading"
  notFoundTemplate: "NotFound"

#
#   Example:
#   Router.route "/",
#     name: "home"
#


Router.route '/', ->
  this.render 'Main'


`
  Router.route('/diary/:_id', function () {
    this.render('Diarysitemlist', {
      data: function () {
        return Dairys.findOne({_id: this.params._id});
      }
    });
  }, {
    name: 'diary.show'
  });`

Router.route 'Post'

Router.route 'Diarys'

Router.route 'Approval'

`Router.route('Signin', {name: 'Signin'});`

Router.route 'Signup'