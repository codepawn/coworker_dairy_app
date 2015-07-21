Template.Signup.events 'click button[name=save]': (evt, tmpl) ->
  evt.preventDefault()
  id = tmpl.find('input[name=id]').value
  pwd = tmpl.find('input[name=password]').value
  rank = tmpl.find('select[name=rank]').value
  info =
    username: id
    password: pwd
    profile:
      rank: rank
  Accounts.createUser info, (err) ->
    if err
      alert '다시시도' + err
    else
      Router.go 'home'

Template.Signup.helpers

Template.Signup.created = ->

Template.Signup.rendered = ->

Template.Signup.destroyed = ->