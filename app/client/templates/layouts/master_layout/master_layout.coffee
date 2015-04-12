# MasterLayout: Event Handlers and Helpers
Template.MasterLayout.events
# Example:
#  "click .selector": (e, tmpl) ->
#

Template.MasterLayout.helpers
# Example:
#   items: ->
#

# MasterLayout: Lifecycle Hooks
Template.MasterLayout.created = ->

Template.MasterLayout.rendered = ->
  $.material.init()

Template.MasterLayout.destroyed = ->