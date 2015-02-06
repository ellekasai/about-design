$(function() {
  var $trigger = $('#js-trigger');
  var $prevContents = $('#js-prev');
  var $afterContents = $('#js-after');

  $trigger.on('click', function() {
      $prevContents.hide();
      $afterContents.fadeIn('slow');
  });
});