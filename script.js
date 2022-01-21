let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
}

const alert = () => {
    return 'Number is out of range';
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => {
  if (userGuess < 0 || userGuess > 9) {
      console.log(alert());
  }  
  if (getAbsoluteDistance(secretTarget, userGuess) === getAbsoluteDistance(secretTarget, computerGuess)) {
    return true;
  } else if (getAbsoluteDistance(secretTarget, userGuess) < getAbsoluteDistance(secretTarget, computerGuess)) {
    return true;
  } else if (getAbsoluteDistance(secretTarget, userGuess) > getAbsoluteDistance(secretTarget, computerGuess)) {
    return false;
  }
}

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1; 
}
