Template.Front.rendered = function () {

  setTimeout(function () {

    var $container = $('#container');

    $container.imagesLoaded(function () {
      $container.masonry({
        itemSelector: '.item'
      });
    });


  },500);

};