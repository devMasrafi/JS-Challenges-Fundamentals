let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

const inputForm = document.querySelector("form");
const inputNumber = document.querySelector(".inputNumber");
const inputCondition = document.querySelector(".numberInfo");
const previousGuessSpan = document.querySelector(".previousGuess span");
const attempts = document.querySelector(".attemptsLeft span");

// console.log(previousGuessSpan);

const previousGuessArrr = [];
let attemptCount = 0;

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = inputNumber.value;
  const validInput = parseInt(userInput.trim());
  //   console.log(validInput);

  //   console.log(userInput);
  checkNumber(validInput);
});

// check the number for guess
function checkNumber(number) {
  if (isNaN(number) || number < 0) {
    return `enter a valid number`;
  } else {
    previousGuessArrr.push(number);

    if (attemptCount === 9) {
      console.log(`you loose. the correct guess was ${randomNum}`);
      setTimeout(() => {
        endGame();
      }, 3000);
    } else {
      guessCalc(number);
      attemptCount++;
      inputNumber.value = "";
    }
  }
  previousGuessSpan.textContent = ` ${previousGuessArrr}, `;
  attempts.textContent = `${attemptCount} `;
}

function guessCalc(guess) {
  if (guess < randomNum) {
    inputCondition.textContent = `your number is too low`;
  } else if (guess > randomNum) {
    inputCondition.textContent = `your number is too high`;
  } else if (guess === randomNum) {
    inputCondition.textContent = `congrats you win, The number was ${randomNum}`;
    setTimeout(() => {
      endGame();
    }, 3000);
  }
}

function endGame() {
//   console.log(`here is end`);
  inputNumber.value = "";
  previousGuessArrr.length = 0;
  attemptCount = 0;

  newGame();
}

function newGame() {
  randomNum = parseInt(Math.random() * 100 + 1);
  console.log(randomNum);
  

  inputNumber.value = "";
  inputCondition.textContent = `your number position`;
  previousGuessSpan.textContent = "";
  attempts.textContent = `0`;
}
