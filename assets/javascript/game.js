//Setting variables and zeroing counters
var won = 0;
var lost = 0;
var attempts = 10;
var lettersGuessed = [];
var computerLetter = computerLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"
var reset = function(){
    attempts = 10;
    lettersGuessed.length = 0;

}

//GENERATING THE COMPUTER LETTER
//Generates random number which is multiplied by letters.length and rounded down to the nearest whole number by the Math.floor method
computerLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(computerLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var computerLetter
function compGuess() {
      computerLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(computerLetter);

}

//PLAYER GUESS
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
      var playerGuess = event.key;

      //CORRECT GUESS
      //if players guess equals computerLetter, it increments wins by 1, and clears lettersGuessed 
      if (playerGuess === computerLetter) {
            won++;
            reset();

      }

      //INCORRECT GUESSES
      //if players guess does not equal computerLetter, it decriments attempts by 1
      compGuess();
      if (playerGuess !== computerLetter) {
            attempts--;

      }

      //when remaining attempts equal zero, lost is incrimented by 1; attempts is reset to 10, and lettersGuessed is cleared
      if (attempts == 0) {
            lost++;
            reset();
      }

      //DUPLICATE GUESSES - ALERT
      //prevents a letter selected a 2nd time from being repeated on lettersGuessed, but still counts as a guess
      if (lettersGuessed.indexOf(playerGuess) >= 0) {
          alert("Please pick a different letter.");

      } else {
            //pushes the incorrect guess to the lettersGuessed and writes it to the HTML span id
            lettersGuessed.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = lettersGuessed;
            console.log(lettersGuessed);

      }
      //HTML
      //writes the values/scores to the HTML span id
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}