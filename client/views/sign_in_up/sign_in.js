Template.signin.events({
  'click button[name=logIn]': function (evt, tmpl) {

    var id = tmpl.find('input[name=username]').value;
    var pwd = tmpl.find('input[name=password]').value;

    Meteor.loginWithPassword(id, pwd, function (err) {
      if (err) {
        alert('다시시도' + err);
      } else {
        Router.go('main');
      }

    })
  }
});

Template.signup.events({
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

    Accounts.validateNewUser(function (user) {
      if (user.username && user.username.length >= 3) {
        return true;
      } else {
        throw new Meteor.Error(403, '3자리 이상 입력해주세요');
      }
    });

    Accounts.createUser(info, function (err) {
      if (err) {
        alert('다시시도' + err);
      } else {
        Router.go('signin');
      }

    })
  }
});

