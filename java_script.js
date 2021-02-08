// Animating content

$('#circle').click(function () {
  $(this).css('backgroundColor', 'red');
  $(this).animate(
    {
      width: '500px',
      height: '500px',
      marginLeft: '300px',
      marginTop: '500px',
    },
    800
  );
});
