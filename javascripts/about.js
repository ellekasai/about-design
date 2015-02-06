$(function() {
  var $body = $('body');
  var $prevTrigger = $('#js-prev-trigger');
  var $afterTrigger = $('#js-after-trigger');
  var $prevContents = $('#js-prev');
  var $afterContents = $('#js-after');

  $prevTrigger.on('click', function() {
      $prevContents.hide();
      $afterContents.fadeIn('slow');
  });

  $afterTrigger.on('click', function() {
      $afterContents.hide();
      $prevContents.show();
      var $parent = $('#js-parent').offset().top;
      $body.animate({ scrollTop: $parent }, 'normal');
  });
});