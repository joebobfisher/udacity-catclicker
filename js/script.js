var cats = [{name:"Kitty #1", counter:0, image:"img/kitty1.gif"},
            {name:"Kitty #2", counter:0, image:"img/kitty2.gif"},
            {name:"Kitty #3", counter:0, image:"img/kitty3.gif"},
            {name:"Kitty #4", counter:0, image:"img/kitty4.gif"},
            {name:"Kitty #5", counter:0, image:"img/kitty5.gif"}];

var $k_list = $('#kitty-list');

var $k_name = $('#kitty-name');
var $k_image = $('#kitty-img');
var $k_counter = $('#kitty-counter');

var selected;

function showKitty(kitty_num) {
    selected = kitty_num;
    $k_name.text(cats[kitty_num].name);
    $k_image.html("<img src='" + cats[kitty_num].image + "'>");
    $k_counter.text("Counter: " + cats[kitty_num].counter);
}

for (var i=0; i < cats.length; i++) {
    $k_list.append("<li><a href='#' onclick=showKitty("+ i +")>"+ cats[i].name +"</a></li>");
}

$k_name.text("Select a kitty to the left!");
$k_counter.text("");

$k_image.click(function(e) {
    cats[selected].counter++;
    $k_counter.text('Counter: ' + cats[selected].counter);
});
