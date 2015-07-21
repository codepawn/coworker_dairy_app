@Approval = new Mongo.Collection('approval')


if Meteor.isServer
  Approval.allow
    insert: (userId, doc) ->
      true
    update: (userId, doc, fieldNames, modifier) ->
      true
    remove: (userId, doc) ->
      true
