Meteor.startup(function () {
  if (Dairys.find().count() === 0) {
    for (var i = 0; i < 6; i++) {
      Dairys.insert({
        title: "오늘의 일기" + i,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque blanditiis commodi consectetur cum deserunt doloribus eaque facilis maiores, mollitia nam nisi obcaecati odit, quia temporibus velit vero voluptas."
      });
    }
    console.log('insert success');
  }
});
