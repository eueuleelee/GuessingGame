$(document).ready(function(){

  function game () {
    var actual = Math.floor(Math.random() * 100 + 1); //generate a random # (1-100)
    var guess = 0;
    var ans = [];
    var temp = "";
    var diff = Math.abs(actual - guess);

    //user submit guess
    $('#guess').on("keyup", function(){
      guess = +$(this).val();
    });

    //click to submit guess
    $('#submit').on("click", function () {

      // if guess repeated : You've picked this number before!
      if (ans.indexOf(guess) != -1) {
          $('.comment').text("You've picked this number before!");
      }

      ans.push(guess); //push guesses into an array ans
      var total = ans.length; //countdown # of guesses

      // validate if guess is a real #
      if (isNaN(guess) == true) {
        $('.comment').text("This is not a valid number.");
      }



      //Submit guess -> cannot submit after 5, submit after play again!
      //Sorry, Play Again! + Show Ans
      //Hint of # (only show if ans.length < 5)
      if (total < 5) {
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
          $('.comment').text(total + "/5 : You Are " + temp +", Guess Higher");
        }
        else if (actual < guess) {
          $('.comment').text(total + "/5 : You Are " + temp +", Guess Lower");
        }
        else if (actual == guess) {
          $('.comment').text(total + "/5 : You are CORRECT");
        }
      }

      else if (actual != guess && total == 5) {
        $('.comment').text("Sorry, Play Again!");
      }

    });

    //show the answer
    $('#hint').on("click", function(){
      $('.comment').text(actual);
    });

  }

  //Play again - reset the game
  $("#restart").on("click", function(){
    game();
    $('.comment').text("Your game has been restarted, submit a new guess!");
  });

  game();


});
