let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const checkBtn = document.getElementById("checkBtn");
const againBtn = document.querySelector(".againbtn");
const inputValue = document.getElementById("inputValue");
const guessedValue = document.getElementById("guessedValue");
const guessedNumberText = document.getElementById("guessedNumber");
const scoreText = document.getElementById("score");
const highScoreText = document.getElementById("highScore");
const message = document.getElementById("message");
const container = document.querySelector(".container");

console.log("Secret Number:", secretNumber);

scoreText.textContent = `Score: ${score}`;
highScoreText.textContent = `High Score: ${highScore}`;

checkBtn.addEventListener("click", () => {
  const guess = Number(inputValue.value);
  console.log("User guessed:", guess);

  if (!guess || guess < 1 || guess > 20) {
    message.textContent = "Enter a number between 1 and 20";
  } else if (guess === secretNumber) {
    guessedValue.textContent = secretNumber;
    message.textContent = "Correct Number!";
    container.style.backgroundColor = "green";

    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = `High Score: ${highScore}`;
    }
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too high" : "Too low";
      score--;
    } else {
      message.textContent = "You lost the game!";
      score = 0;
    }
    scoreText.textContent = `Score: ${score}`;
  }

  guessedNumberText.textContent = `Guessed Number: ${guess}`;
});

againBtn.addEventListener("click", () => {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  console.log("New Secret Number:", secretNumber);

  score = 20;
  inputValue.value = "";
  guessedValue.textContent = "?";
  guessedNumberText.textContent = "Guessed Number: ";
  message.textContent = "Start guessing...";
  scoreText.textContent = `Score: ${score}`;
  container.style.backgroundColor = "black";
});
