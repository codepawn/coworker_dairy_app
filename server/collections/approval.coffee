#
# Add query methods like this:
#  Approval.findPublic = ->
#    Approval.find is_public: true
#
Approval.allow
  insert: (userId, doc) ->
    true

  update: (userId, doc, fieldNames, modifier) ->
    true

  remove: (userId, doc) ->
    true

Approval.deny
  insert: (userId, doc) ->
    false

  update: (userId, doc, fieldNames, modifier) ->
    false

  remove: (userId, doc) ->
    false