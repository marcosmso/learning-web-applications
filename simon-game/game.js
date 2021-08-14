var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSong(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(()=>{
    if (!started) {
        nextSequence();
        started = true;
    }
});

function nextSequence(){
    level = level + 1;
    $("#level-title").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 3 + 1);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    chosenButton = $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSong(randomChosenColour);
    
}

function playSong(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass('pressed');
    }, 100);
}

function checkAnswer(currentLevel){

    if (userClickedPattern[currentLevel] != gamePattern[currentLevel]){
        playSong("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass('game-over');
        }, 200);

        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        return;
    }

    if (userClickedPattern.length == level){
        userClickedPattern = [];
        setTimeout(nextSequence, 1000);
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}