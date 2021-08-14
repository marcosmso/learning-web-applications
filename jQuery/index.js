// setting h1 color to red
$("h1").css("color", "red");

// just getting the property
var color = $("h1").css("color");

// add multiple class to h1
$("h1").addClass("big-title margin-50");

// it will return true/false
$("h1").hasClass("margin-50");

// change text
$("h1").text("Bye");
$("button").text("Don't click me"); //all button will have its text changed

// equivalent to innerHTML
$("button").html("<h3>Press me</h3>");

// get attributes
var href = $('a').attr("href");
var classes = $("h1").attr("class");

// set attributes
$('a').attr("href","http://www.google.com");

// add event listeners
$("h1").click(function(){
    $("h1").css("color", "purple");
});

// add event listeners to all buttons
$("button").click(function(){
    $("h1").css("color", "purple");
});

$("input").keydown(function(e){
    console.log(e.key);
});

$(document).keydown(function(e){
    $("h1").text(e.key);
});

// more flexible way to add events
$("h1").on("mouseover", function(){
    $("h1").css("color", "pink");
});

// Creating elements on the fly
$("h1").before("<button>New</button>");  //<button>New</button><h1>Tittle</h1>
$("h1").after("<button>New</button>");   //<h1>Tittle</h1><button>New</button>
$("h1").prepend("<button>New</button>"); //<h1><button>New</button>Tittle</h1>
$("h1").append("<button>New</button>");  //<h1>Tittle<button>New</button></h1>

// remove elements
// $("button").remove();

// hide and show elements
$("button").on("click", function(){
    // $("h1").hide();
    // $("h1").show();
    // $("h1").toggle();

    // $("h1").fadeIn();
    // $("h1").fadeOut();
    // $("h1").fadeToggle();
    
    // $("h1").slideIn();
    // $("h1").slideOut();
    $("h1").slideToggle();
});

// Aninmate with custom css
$("button").on("click", function(){
    $("h1").animate({opacity: 0.5}); //just for variable that are numeric values
});
