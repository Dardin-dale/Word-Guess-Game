$(document).ready(function () {
    var game = {
        start: true,
        remain: 6,
        guesses: [],
        blanks: [],
        wins: 0,
        word: 'salmon',
        // picks a random object from words list
        wordPick: function () {
            // pick random word/object, 
            // add appropriate number of blanks
            for(var i = 0; i < this.word.length; i++) {
                if (this.word[i] == " ") {
                    this.blanks[i] = " ";
                } else {
                    this.blanks[i] = "_";
                }
            }
            // this.word = result;
        },
        //updates html and game state to current guesses and blanks
        update: function () {
            // print to console first then figure out styling
            console.log("blanks: " + this.blanks);
            console.log("guesses: " + this.guesses);
            console.log("remain: " + this.remain);
            console.log("wins: " + this.wins)
            
            // var html = "<p>" + this.guesses + "</p>";
            // $('#game').innerHTML(html)
        },
        // default display if someone wins, asks to play again.
        win: function () {
            console.log("you Win!")
        },
        // default display if someone loses asks to play again.
        lose: function () {
            console.log("You lose!")
        },
        //resets game state picks a new word.
        reset: function () {
            this.start = true;
            this.remain = 6;
            this.guesses = [];
            this.blanks = [];
            this.wordPick();
        },
        //finds indecies of letter in a given word and replaces same index in blanks
        replaceBlnk: function (letter) {
            for (var i = 0; i < this.word.length; i++) {
                if (this.word[i] === letter) {
                    this.blanks[i] = letter;
                }
            }
        }

    };

    //checks if string is an a-z letter (assume lowercase)
    function isLetter(str) {
        return !!(str.length === 1 && str.match(/[a-z]/i));
    }

    //user guesses letter, runs through game logic
    document.onkeyup = function (event) {
        var guess = event.key.toLowerCase();

        //only pick word at match start
        if (game.start) {
            game.wordPick();
            game.start = false;
        }

        //check if guess is letter and continue
        if (isLetter(guess)) {
            // finds if guess is contained in word && not duplicate correct letter
            if (game.word.includes(guess) && !game.blanks.includes(guess)) {
                //replaces balnks with guess/updates game
                game.replaceBlnk(guess);
                game.update();
                // wins if no blanks remaining
                if (!game.blanks.includes("_")) {
                    game.wins++;
                    game.update();
                    game.win();
                }
            // if guess is wrong but new
            } else if (!game.guesses.includes(guess)) {
                game.remain--;
                if (game.remain === 0) {
                    game.lose();
                }
                game.guesses.push(guess);
                game.update();
            //Guess is wrong and already guessed
            } else {
                //TODO: you already guessed that!
            }
        }
    }
});