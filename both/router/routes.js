Router.route('/diary/:_id', function () {
  this.render('Diarysitemlist', {
    data: function () {
      return Diarys.findOne({_id: this.params._id});
    }
  });
}, {
  name: 'Diary.show'
});

Router.route('Signin', {name: 'Signin'});