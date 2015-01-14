@Approval = new Mongo.Collection('approval');
#
# Add query methods like this:
#  Approval.findPublic = ->
#    Approval.find is_public: true
#