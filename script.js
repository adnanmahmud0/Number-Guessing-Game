let randomNumber;
let attemptsLeft;
const maxAttempts = 10;

function startGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = maxAttempts;
  document.getElementById("message").textContent = "";
  document.getElementById("attemptsLeft").textContent = `Attempts left: ${attemptsLeft}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.querySelector(".submit-btn").disabled = false;
}

function submitGuess() {
  const userGuess = parseInt(document.getElementById("guessInput").value);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  document.getElementById("attemptsLeft").textContent = `Attempts left: ${attemptsLeft}`;

  if (userGuess === randomNumber) {
    document.getElementById("message").textContent = "Congratulations! You guessed it!";
    endGame();
  } else if (userGuess < randomNumber) {
    document.getElementById("message").textContent = "Too low!";
  } else {
    document.getElementById("message").textContent = "Too high!";
  }

  if (attemptsLeft === 0 && userGuess !== randomNumber) {
    document.getElementById("message").textContent = "Game Over! You've used all attempts.";
    endGame();
  }
}

function endGame() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector(".submit-btn").disabled = true;
}

function restartGame() {
  startGame();
}

// Initialize game on load
window.onload = startGame;