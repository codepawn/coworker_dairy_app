Template.masterLayout.helpers({
  asdff: function() {
    Diarys.findOne();
  }
});
Template.masterLayout.rendered = function() {
  $.material.init();
};
