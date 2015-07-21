Template.Post.events
  'submit form': (evt, tmpl) ->
    evt.preventDefault()
    title = tmpl.find('input[name=title]').value
    content = tmpl.find('textarea[name=content]').value
    userId = Meteor.userId()
    if title.length == 0
      alert '최소 1자이상 입력하세요'
    else
      Diarys.insert
        title: title
        content: content
        user_id: userId
      Router.go 'home'

Template.Post.helpers
# Example:
#   items: ->
#

# Post: Lifecycle Hooks
Template.Post.created = ->


Template.Post.rendered = ->
  $('#summernote').summernote
    height: 300
    width: 621
    lang: 'ko-KR'

Template.Post.destroyed = ->