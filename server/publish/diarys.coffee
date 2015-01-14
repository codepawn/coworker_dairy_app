#
# Diarys Publish Functions
#
Meteor.publish "diarys", ->
  # you can remove this if you return a cursor
  @ready()
  return