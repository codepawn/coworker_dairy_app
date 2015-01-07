Meteor.startup(function () {
  if (Dairys.find().count() === 0) {
    for (var i = 0; i < 10; i++) {
      if (i % 2) {
        Dairys.insert({
          title: "샘플 일지" + i,
          content: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque blanditiis commodi consectetur cum deserunt doloribus eaque facilis maiores, mollitia nam nisi obcaecati odit, quia temporibus velit vero voluptas."
        });
      } else {
        Dairys.insert({
          title: "Sample dairys" + i,
          content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque blanditiis commodi consectetur cum deserunt doloribus eaque facilis maiores, mollitia nam nisi obcaecati odit, quia temporibus velit vero voluptas."
        });
      }
    }
    console.log('insert success');
  }
});
