$(function() {
  $('#text-form').submit(function (event) {
    var shoutText = $('#text-input').val();
    $(".panel .p-shout").text(shoutText.toUpperCase());
    event.preventDefault();
  });
});
