Template.front.helpers({
  dairys: function () {
    return Dairys.find();
  }
});

Template.post.events({
  'submit form': function (evt, tmpl) {
    var title = tmpl.find('input[name=title]').value;
    var content = tmpl.find('textarea[name=content]').value;
    var userId = Meteor.userId();

    if (title.length === 0) {
      alert('최소 1자이상 입력하세요');
    } else {
      Dairys.insert({
        title: title,
        content: content,
        user_id: userId,

      });
      Router.go('main');
    }
  }
});


Template.dairysItem.events({
  'click button[id=remove]': function () {
    Dairys.remove({_id: this._id});
  }
});

Template.approval.rendered = function () {


};
