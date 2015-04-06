//jquery
$(document).ready(function(){

  function game () {
    var actual = Math.floor(Math.random() * 100 + 1); //generate a random # (1-100)
    var guess = 0;
    var ans = [];
    var remain = 5 - ans.length; //countdown # of guesses
    var temp = "";
    var diff = Math.abs(actual - guess);

    //user submit guess
    $('#guess').on("keyup", function(){
      guess = +$(this).val();
    });

    //click to submit guess
    $('#submit').on("click", function () {

      ans.push(guess); //push guesses into an array ans

      // validate if guess is a real #
      if (isNaN(guess) == true) {
        $('comment').text("This is not a valid number.");
      }

      // if guess repeated : You've picked this number before!
      for (var i=0; i < ans.length; i++) {
        if (guess == ans[i]) {
          $('comment').text("You've picked this number before!");
        }
      }

      //Submit guess -> cannot submit after 5, submit after play again!
      //Sorry, Play Again! + Show Ans
      //Hint of # (only show if ans.length < 5)
      if (ans.length < 5) {
        $('reminder').text("You have " + remain + " guesses remaining!");
      }
      else if (actual != guess && remain == 0) {
        $('reminder').text("Sorry, Play Again!");
      }

      //compare actual and guess
      //temperature  +ve #(actual - guess)
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
        $('comment').text("You Are " + temp +", Guess Higher");
      }
      else if (actual < guess) {
        $('comment').text("You Are " + temp +", Guess Lower");
      }
      else if (actual == guess) {
        $('comment').text("You are CORRECT");
      }

    });

    //show the answer
    $('#hint').on("click", function(){
      $('reminder').text(actual);
    });  
  }

  //Play again - reset the game
  $("#restart").on("click", function(){
    game();
    $('comment').text("Your game has been restarted, submit a new guess!");
  })

});
