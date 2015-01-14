@Diarys = new Mongo.Collection('diarys');
#
# Add query methods like this:
#  Diarys.findPublic = ->
#    Diarys.find is_public: true
#