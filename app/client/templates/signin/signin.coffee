Template.Signin.events 'click button[name=logIn]': (evt, tmpl) ->
  evt.preventDefault()
  id = tmpl.find('input[name=username]').value
  pwd = tmpl.find('input[name=password]').value
  Meteor.loginWithPassword id, pwd, (err) ->
    if err
      alert '다시시도' + err
    else
      Router.go '/'

Template.Signin.helpers

Template.Signin.created = ->

Template.Signin.rendered = ->

Template.Signin.destroyed = ->