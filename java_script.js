//********** Click on the button to fadeOut/fadeIn the p tag
$('#btn1').click(function () {
  $('p').fadeOut();
});

$('#btn2').click(function () {
  $('p').fadeIn();
});

//********** Changing the fade speed v1
$('#btn1').click(function () {
  $('p').fadeOut(500);
});

$('#btn2').click(function () {
  $('p').fadeIn(600);
});

//********** Changing the fade speed v2
$('#btn1').click(function () {
  $('p').fadeOut('slow');
});

$('#btn2').click(function () {
  $('p').fadeIn('fast');
});

//********** Changing the fade with a callback function
$('#btn1').click(function () {
  $('p').fadeOut('slow', function () {
    console.log('Fade out complete');
  });
});

$('#btn2').click(function () {
  $('p').fadeIn('slow', function () {
    console.log('Fade In complete');
  });
});
