let difficultyLevelSelect = document.getElementById("difficultyLevel");
difficultyLevelSelect.addEventListener("change", function() {
  let selectedLevel = this.value.split("-");
  let minNumber = parseInt(selectedLevel[0]);
  let maxNumber = parseInt(selectedLevel[1]);
  targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  // Сбрасываем игру и начинаем новую с выбранным уровнем сложности
});
let targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let guessInput = document.getElementById("guessInput");
  let playerGuess = parseInt(guessInput.value);

  if (playerGuess === targetNumber) {
    document.getElementById("result").textContent = "Поздравляем! Вы угадали число.";
    document.getElementById("guessButton").style.display = "none";
    document.getElementById("playAgain").style.display = "inline-block";
  } else if (playerGuess < targetNumber) {
    document.getElementById("result").textContent = "Слишком низко, попробуйте еще раз.";
  } else {
    document.getElementById("result").textContent = "Слишком высоко, попробуйте еще раз.";
  }

  attempts++;
  document.getElementById("attempts").textContent = `Попытки: ${attempts}`;
  guessInput.value = "";
}

document.getElementById("guessButton").addEventListener("click", checkGuess);

document.getElementById("playAgain").addEventListener("click", function() {
  targetNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("result").textContent = "";
  document.getElementById("attempts").textContent = "Попытки: 0";
  document.getElementById("guessButton").style.display = "inline-block";
  document.getElementById("playAgain").style.display = "none";
});