Router.configure({
  layoutTemplate: 'navBar'
});

Router.route('/', function () {
  this.render('front');

});

Router.route('post');
Router.route('dairys');
Router.route('approval');

Template.front.helpers({
  dairys: function () {
    return Dairys.find();
  }
});

Template.post.events({
  'submit form': function (evt, tmpl) {
    var title = tmpl.find('input[name=title]').value;
    var content = tmpl.find('textarea[name=content]').value;
    if (title.length === 0) {

    } else {
      Dairys.insert({
        title: title,
        content: content
      });
      Router.go('front');
    }

  }
});

Template.dairysItem.events({
    'click button[id=remove]':function(){
    Dairys.remove({_id:this._id});
    }
});

Template.approval.rendered = function(){


};
