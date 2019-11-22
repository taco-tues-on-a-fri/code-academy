//get userchoice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Learn how to spell or play homie!');
  }
}

//get computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

//determine winner
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'User cheated and won!';
  }
  if (userChoice === computerChoice) {
    return `Both players picked ${userChoice}, game ended in a tie.`;
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return `Computer wins with scissors!`
    } else {
      return `User wins with paper!`;
    }
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins with paper!';
    } else {
      return 'User wins with rock!';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer Wins with rock!';
    } else {
      return 'User wins with scissors!';
    }
  }
}

// play game
const playGame = () => {
  let userChoice = getUserChoice('scissors');
  console.log(`The user picked: ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`The computer picked: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();