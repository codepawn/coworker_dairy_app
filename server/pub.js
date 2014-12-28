Meteor.publish('dairys',function(){
  return Dairys.find({user_id: this.userId});
});