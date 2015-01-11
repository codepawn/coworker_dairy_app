Template.Front.helpers({
  dairys: function () {
    return Dairys.find();
  }
});


Template.Front.rendered = function () {

  setTimeout(function(){


    $('#container').imagesLoaded(function () {
      var app = {
        autoResize: true, // This will auto-update the layout when the browser window is resized.
        container: $('#container') // Optional, used for some extra CSS styling
      };

      var handler = $('.item');
      handler.wookmark(app);
    });


  }, 200);

};


Template.Post.events({
  'submit form': function (evt, tmpl) {
    //evt.preventDefault();
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


Template.DairysItem.events({
  'click button[id=remove]': function () {
    Dairys.remove({_id: this._id});
  }
});

Template.DairysItemList.events({
  'click button[id=remove]': function () {
    Dairys.remove({_id: this._id});
    Router.go('main');
  }
});


Template.DairysItem.rendered = function () {
  $('#pinboard').isotope('reloadItems');
};