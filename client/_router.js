Router.configure({
  layoutTemplate: 'navBar'
});

Router.route('/', function () {
  this.render('front');
});

Router.route('/dairy/:_id', function () {
  this.render('dairysItemList');
}, {
  name: 'dairy.show'
});

Router.route('post');

Router.route('dairys');

Router.route('approval');
