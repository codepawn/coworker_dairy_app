@Diarys = new Mongo.Collection('diarys')


if Meteor.isServer
  Diarys.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true