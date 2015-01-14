#
# Diarys Publish Functions
#
Meteor.publish "diarys", ->
  Diarys.find()