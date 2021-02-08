// Loading data with AJAX

// jQuery get function
$.get('test.html', function (data) {
  console.log(data);
});

//jQuery ajax function
$.ajax({ url: 'test.html' }).done(function (data) {
  console.log(data);
});

//jQuery after an ajax call change the h1 content
$.ajax({ url: 'test.html' }).done(function (data) {
  $('h1').html(data);
});

//jQuery changing text after an ajax call
$.ajax({ url: 'test.html' }).done(function (data) {
  $('#btn1').click(function () {
    $('h1').html(data);
  });
});

//jQuery appending text after an ajax call
$.ajax({ url: 'test.html' }).done(function (data) {
  $('#btn1').click(function () {
    $('h1').append(data);
  });
});
