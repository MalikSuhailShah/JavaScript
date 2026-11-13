let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessedSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrhi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; // this array store the data of guess , in this project we are not using it  , it will become useful when we avoid same guesses again again 
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (event) {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a Valid Number !!");
  } else if (guess > 100) {
    alert("Please Enter Number Less than 100!!");
  } else if (guess < 1) {
    alert("Please Enter Number Greater than 1!!");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      // all  chances are Over
      DisplayGuess(guess);
      DisplayMessage(`Game is Over. Random Number is ${randomNumber}`);
      endGame();
    } else {
      // some chances is still there
      DisplayGuess(guess);
      CheckGuess(guess);
    }
  }
}

function CheckGuess(guess) {
  if (guess == randomNumber) {
    DisplayMessage(`Your Gueseds it Right`);
    endGame();
  } else if (guess > randomNumber) {
    DisplayMessage(`Number is TOO High `);
  } else {
    DisplayMessage(`NUmber is TOO Low `);
  }
}

function DisplayGuess(guess) {
  userInput.value = ""; // resets the input to null for next input
  guessedSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function DisplayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", ""); // disabled attribute always used in pair
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start New Game Again</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessedSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
