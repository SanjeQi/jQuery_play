// Changing the paragraph text on click
$('#circle').click(function () {
  $('p').html('No longer a random text.Text has been changed');
});

/* Returning the content of the paragraph : $("p").html()
    Changing the content of the paragraph : $("p").html("replacing the old text")
*/
alert($('p').html());

// Changing the paragraph text on hover

$('#circle').hover(function () {
  $('p').html('Text was changed on hover');
});

// Changing an at attribute of a particular element
$('#circle').click(function () {
  $('iframe').attr('src', 'https://www.meteoblue.com/');
});
