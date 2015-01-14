

Template.Dairysitemlist.events({
  'click button[id=remove]': function () {
    Diarys.remove({_id: this._id});
    Router.go('Main');
  }
});
