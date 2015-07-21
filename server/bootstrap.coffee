Meteor.startup ->
  if Diarys.find().count() is 0
    i = 0
    while i < 10
      if i % 2
        Diarys.insert
          title: '샘플 일지' + i
          content: 'Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque blanditiis commodi consectetur cum deserunt doloribus eaque facilis maiores, mollitia nam nisi obcaecati odit, quia temporibus velit vero voluptas.'
      else
        Diarys.insert
          title: 'Sample dairys' + i
          content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid atque blanditiis commodi consectetur cum deserunt doloribus eaque facilis maiores, mollitia nam nisi obcaecati odit, quia temporibus velit vero voluptas.'
      i++
    console.log 'insert success'
