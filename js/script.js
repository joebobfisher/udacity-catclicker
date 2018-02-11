var k1clicks = 0;
var k2clicks = 0;
var $k1_counter_space = $('#k1counter');
var $k2_counter_space = $('#k2counter');

var k1_name = "Kitty #1";
var k2_name = "Kitty #2";
var $k1_name_space = $('#k1name');
var $k2_name_space = $('#k2name');

$k1_name_space.text(k1_name);
$k1_counter_space.text("");
$k2_name_space.text(k2_name);
$k2_counter_space.text("");

$('#kitty1').click(function(e) {
    k1clicks++;
    $k1_counter_space.text('Counter: ' + k1clicks);
});

$('#kitty2').click(function(e) {
    k2clicks++;
    $k2_counter_space.text('Counter: ' + k2clicks);
});
