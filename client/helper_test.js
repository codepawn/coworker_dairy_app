Router.configure({
  layoutTemplate: 'navBar'
});

Router.route('/', function () {
  this.render('front');

});

Router.route('post');
Router.route('dairys');

Template.front.helpers({
  dairys: function () {
    return Dairys.find();
  }
});

Template.post.events({
  'submit form': function (evt, tmpl) {
    Dairys.insert({
      title: tmpl.find('input[name=title]').value,
      content: tmpl.find('input[name=content]').value
    });
  }
});
