//Changing styles
$('body').click(function () {
  $('.box').css('width', '200px');
  $('.box').css('height', '200px');
});

//Selecting the element that I clicked on and changing styles
$('div').click(function () {
  $(this).css('background-color', 'red');
});

//Click the item and it disappears v1
$('div').click(function () {
  $(this).css('display', 'none');
});

//Click the item and it disappears v2
$('div').click(function () {
  $(this).hide();
});

//Click the item and it disappears v3
$('div').click(function () {
  $(this).fadeOut();
});

//Click on the circle and fadeOut the boxes
$('#circle').click(function () {
  $('.box').fadeOut();
});
