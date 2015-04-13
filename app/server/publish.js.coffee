Meteor.publish 'diarys', ->
  Diarys.find()

Meteor.publish 'diary',(id) ->
  Diarys.find _id: id