Template.Diarysitemlist.events
  'click button[id=remove]': ->
    Diarys.remove id: @_id
    Router.go 'home'
