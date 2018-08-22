var game = {
    start = true,
    remain: 6,
    guesses: [],
    blanks: [],
    wins: 0,
    word: 'salmon',
    // picks a random object from words list
    wordPick: function () {
        // pick random word/object, add appropriate number of blanks
        // this.word = result;
    },

    update: function () {
        var html = "<p>" + this.guesses +"</p>";
        $('#game').innerHTML(html)
    },
    // default display if someone wins, asks to play again.
    win: function () {

    },
    // default display if someone loses asks to play again.
    lose: function () {

    },
    reset: function () {

    }

};


document.onkeyup = fuction(event) {
  var guess = event.key.toLowerCase();
//   check if guess is letter.

  //only pick word at match start
  if (start){
      game.wordPick();
      game.start = false;
  }
  
  // if out of Guesses -> end, else -> play game
  if (game.remain === 0) {
    game.lose()
  } else { //play game
    //   finds if guess is contained in word
      if (game.word.search(guess) != -1){
        //add letter to blanks
        if (game.blanks.indexOf("_") == -1){
            game.wins++;
            game.win()
        }
      } else if (game.guesses.indexOf(guess) != -1) {
        game.remain--;
        game.guesses.push(guess);
        //update html/picture/add a womp womp sound
      } else {
          // you already guessed that!
      }
      


  }
  game.remain--;

  game.guesses.push(event.key)
  var html = "";
  document.querySelector("#game").innerHTML = html;
}
