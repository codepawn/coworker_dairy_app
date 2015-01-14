Template.Signin.events({
  'click button[name=logIn]': function (evt, tmpl) {

    evt.preventDefault();

    var id = tmpl.find('input[name=username]').value;
    var pwd = tmpl.find('input[name=password]').value;

    Meteor.loginWithPassword(id, pwd, function (err) {
      if (err) {
        alert('다시시도' + err);
      } else {
        Router.go('/');
      }

    })
  }
});


Template.Signin.rendered = function () {
  $.material.init()
};