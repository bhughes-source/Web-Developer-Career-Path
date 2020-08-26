// function created using fat arrow method
const getUserChoice = (userInput) => {
  // user input variable declared and forced to be read as lower case no matter input
  userInput = userInput.toLowerCase();
  // players choice if statement, use's || which is or instead of and &&
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb') {
      return userInput
  } else {
    console.log('Error please type rock, paper or scissors');
  }
}
// this is the computer choice function created with fat arrow and no parameters
const getComputerChoice = () => {
  // randomNumber variiable created and use's math floor to bring the math random number down to a whole number, multiplied by 3 so the number is 0-2.99
  const randomNumber = Math.floor(Math.random() * 3);
  // switch statement created to list the different possibilities for randomNumber
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};
// function created to determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Its a TIE!!';
  }
  if (userChoice === 'rock') {
    if(computerChoice === 'paper') {
        return 'sorry, computer won!';
    } else {
      return 'You win!!';
    }
  }
  if (userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'sorry the computer wins.';
    } else {
      return 'You win!!';
    }
  }
  if (userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'sorry you lose.';
    } else {
      return 'You win!!';
    }
  }
  // cheat code, always win when choosing bomb
  if (userChoice === 'bomb') {
    return 'Secret unlocked! You win!!';
  }
};
// play game function, user choose's there throw and assigns it to getUserChoice
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
