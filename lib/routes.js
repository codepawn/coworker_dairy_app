FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function() {
    this.register('diarysRegister', Meteor.subscribe('diarys'));
  },
  action: function() {
    FlowLayout.render('masterLayout', {
      mainYield: 'home'
    });
  },
  name: 'home'
});
FlowRouter.route('/diary/:_id', {
  middlewares: [],
  subscriptions: function(param) {
    this.register('diary', Meteor.subscribe('diary', param._id));
  },
  action: function() {
    return FlowLayout.render('masterLayout', {
      mainYield: 'Diarysitemlist'
    });
  },
  name: 'Diary.show'
});
FlowRouter.route('/post', {
  middlewares: [],
  subscriptions: function(param) {},
  action: function() {
    return FlowLayout.render('masterLayout', {
      mainYield: 'Post'
    });
  },
  name: 'post'
});
FlowRouter.route('/signup', {
  middlewares: [],
  subscriptions: function(param) {},
  action: function() {
    return FlowLayout.render('masterLayout', {
      mainYield: 'Signup'
    });
  },
  name: 'signup'
});
FlowRouter.route('/signin', {
  middlewares: [],
  subscriptions: function(param) {},
  action: function() {
    return FlowLayout.render('masterLayout', {
      mainYield: 'Signin'
    });
  },
  name: 'signin'
});

FlowRouter.notFound = {
  subscriptions: function() {},
  action: function() {
    return FlowLayout.render('notFound');
  }
};
