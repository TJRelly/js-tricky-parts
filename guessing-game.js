function guessingGame() {
    //outer
    //track if won, track guess
    //select random number
    num = Math.floor(Math.random() * 99) + 1;
    guesses = 0;
    isWinner = false;
    //inner
    //return a function that tells you about the random number
    return function (guess) {
        if (isWinner) return "The game is over, you already won!";
        else if (guess === num) {
            isWinner = true;
            guesses++;
            return `You win! You found ${guess} in ${guesses} guesses.`;
        } else if (guess < num) {
            guesses++;
            return `${guess} is too low!`;
        } else if (guess > num) {
            guesses++;
            return `${guess} is too high!`;
        }
    };
    //input - guess - return too high, low, you win, track if you win
}

let game = guessingGame();

module.exports = { guessingGame };
