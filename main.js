//jquery
$(document).ready(function(){});

//var actual = generate a random # (1-100)
var actual = Math.floor(Math.random() * 100 + 1);
//validate real #

//var guess = user submit guess
var guess =

// validate if guess is a real #
if (isNaN(guess) == true) {
  comment = "This is not a valid number."
}

// guess 1,2,3,4,5 -> push into an array
var ans = [];

function answer (guess) {
  ans.push(guess);
}

//[Reminder]
var reminder = document.getElementById("reminder").innerHTML;

//count down # of guesses
var remain = 5 - ans.length;

//Submit guess -> cannot submit after 5, submit after play again!
//Sorry, Play Again! + Show Ans
//Hint of # (only show if ans.length < 5)
if (ans.length < 5) {
  reminder = "You have " + remain + " guesses remaining!";
}
else if (actual != guess && remain == 0) {
  reminder = "Sorry, Play Again!";
}

//[Comment Message]
var comment = document.getElementById("comment").innerHTML;

// if guess repeated : You've picked this number before!
function checkRepeat () {
  for (var i=0; i < ans.length; i++) {
    if (guess == ans[i]) {
      comment = "You've picked this number before!"
    }
  }
}

//compare actual and guess
//temperature  +ve #(actual - guess)
// <= 5 --> Super Hot | <=10 --> Hot | <=15 --> Warm | <25 --> Cold | Ice Cold
var temp = "";
var diff = Math.abs(actual - guess);

if (diff <= 5) {
  temp = "Super Hot";
}
else if (diff <= 10) {
  temp = "Hot";
}
else if (diff <= 15) {
  temp = "Warm"
}
else if (diff <=25) {
  temp = "Cold"
}
else {
  temp = "Ice Cold"
}

// if actual > guess : guess higher | if actual < guess : guess lower | actual = guess : You Are CORRECT
if (actual > guess) {
  comment = "You Are " + temp +", Guess Higher";
}
else if (actual < guess) {
  comment = "You Are " + temp +", Guess Lower";
}
else if (actual == guess) {
  comment = "You are CORRECT";
}


//Play again - reset the game
  comment = "Your game has been restarted, submit a new guess!"
