Template.diarysItem.events
  'click button[id=remove]': ->
    Diarys.remove _id: @_id
