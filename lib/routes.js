FlowRouter.route('/', {
  middlewares: [],
  subscriptions: function(param) {
    this.register('diarys', Meteor.subscribe('diarys'));
  },
  action: function() {
    return FlowLayout.render('MasterLayout', {
      mainYield: 'Home'
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
    return FlowLayout.render('MasterLayout', {
      mainYield: 'Diarysitemlist'
    });
  },
  name: 'Diary.show'
});

FlowRouter.notFound = {
  subscriptions: function() {},
  action: function() {
    return FlowLayout.render('notFound');
  }
};
