Template.Signup.events({
  'click button[name=save]': function (evt, tmpl) {

    var id = tmpl.find('input[name=id]').value;
    var pwd = tmpl.find('input[name=password]').value;
    var rank = tmpl.find('select[name=rank]').value;

    var info = {
      username: id,
      password: pwd,
      profile: {
        rank: rank
      }
    };

    Accounts.createUser(info, function (err) {
      if (err) {
        alert('다시시도' + err);
      } else {
        Router.go('signin');
      }

    })
  }
});

Template.Signup.rendered = function () {
  $.material.init()
};