Router.configure({
  layoutTemplate: 'NavBar',
  notFoundTemplate: 'notFound'
});

Router.route('/', function () {
  this.render('Front');
}, {
  name: 'main'
});

Router.route('/dairy/:_id', function () {
  this.render('DairysItemList', {
    data: function () {
      return Dairys.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'dairy.show'
});

Router.route('post');

Router.route('dairys');

Router.route('approval');

Router.route('signin',{name:'signin'});


Router.route('signup');

