// Model //
var model = { current_kitty: null,
              cats: [ {name:"Kitty #1", counter:0, image:"img/kitty1.gif"},
                      {name:"Kitty #2", counter:0, image:"img/kitty2.gif"},
                      {name:"Kitty #3", counter:0, image:"img/kitty3.gif"},
                      {name:"Kitty #4", counter:0, image:"img/kitty4.gif"},
                      {name:"Kitty #5", counter:0, image:"img/kitty5.gif"} ] };

// Views //
var viewCat = {
    init: function() {
        this.countDom = document.getElementById('kitty-counter');
        this.nameDom = document.getElementById('kitty-name');
        this.imgDom = document.getElementById('kitty-img');
        this.imgDom.addEventListener('click', function() {
            octopus.increment();
        });
        this.render();
    },

    // this guy does the work of the previous "showKitty()"
    render: function() {
        var current = octopus.getCurrentKitty();
        this.countDom.textContent = current.counter;
        this.nameDom.textContent = current.name;
        this.imgDom.src = current.image;
    },

    // need this one so that the gif doesn't reset every time it is rendered...
    renderCounter: function() {
        var current = octopus.getCurrentKitty();
        this.countDom.textContent = current.counter;
    }
};

var viewCatList = {
    init: function() {
        this.catlistJQueryObj = $('#kitty-list');
        this.render();
    },

    render: function() {
        var cats = octopus.getCats();
        for (var i = 0; i < cats.length; i++) {

            // this seems a little easier than addEventListener()
            this.catlistJQueryObj.append('<li><a href="#" onclick=octopus.setCurrentAndRenderKitty('+ i +')>'+ cats[i].name +'</a></li>');
        }
    }
};

// Octopus //
var octopus = {
    init: function() {
        // init model
        model.current_kitty = model.cats[0];

        // init views
        viewCatList.init();
        viewCat.init();
    },

    getCats: function() {
        return model.cats;
    },

    getCurrentKitty: function() {
        return model.current_kitty;
    },

    setCurrentAndRenderKitty: function(kitty_num) {
        model.current_kitty = model.cats[kitty_num];
        viewCat.render();
    },

    increment: function() {
        model.current_kitty.counter++;
        viewCat.renderCounter();
    }
};

// Do it.
octopus.init();
