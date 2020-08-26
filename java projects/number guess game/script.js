let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//target function makes the random number
const generateTarget = () => {
  // random number generated between 0-9
    return Math.floor(Math.random() * 10);
}
// function to compare guessess
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanGap = Math.abs(targetGuess - humanGuess);
  const computerGap = Math.abs(targetGuess - computerGuess);
    return humanDifference <= computerDifference;
  }

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  }else if (winner === 'computer') {
    computerScore++;
  }
}
const advanceRound = () => {
    currentRoundNumber++
}
// this project was lame
