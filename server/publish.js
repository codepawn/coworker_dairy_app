mMeteor.publish('diarys', function() {
  return Diarys.find();
});

Meteor.publish('diary', function(id) {
  return Diarys.find({
    _id: id
  });
});
