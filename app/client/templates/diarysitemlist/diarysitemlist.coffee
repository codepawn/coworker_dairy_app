Template.Diarysitemlist.events
  'click button[id=remove]': ->
    Diarys.remove id: @_id
    Router.go 'home'

Template.Diarysitemlist.helpers
# Example:
#   items: ->
#

# Diarysitemlist: Lifecycle Hooks
Template.Diarysitemlist.created = ->

Template.Diarysitemlist.rendered = ->

Template.Diarysitemlist.destroyed = ->