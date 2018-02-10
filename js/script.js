var counter = 0;
var $counter_space = $('#counterspace');

$('#kitty').click(function(e) {
    counter++;
    $counter_space.text('Counter: ' + counter);
});
