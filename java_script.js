//Draggable - draggable()
$('#square1').draggable();

//Resizable - resizable()
$('#square2').resizable();

//Drag and Resize
$('#square3').draggable().resizable();

//Drop - droppable()

$('#square4').droppable({
  drop: function (ui, event) {
    console.log('dropped');
  },
});

//Drop - droppable()  and change color on drop
$('#square4').droppable({
  drop: function (ui, event) {
    $(this).css('background-color', 'yellow');
  },
});
