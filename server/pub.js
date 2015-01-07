Meteor.publish('dairys',function(){
  return Dairys.find({});
});