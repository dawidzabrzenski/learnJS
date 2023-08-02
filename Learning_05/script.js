'use strict';

// VARIABLES
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// QUERY SELECTORS
const textMessage = document.querySelector('.message');
const textScore = document.querySelector('.score');
const textNumber = document.querySelector('.number');

textScore.textContent = score;

// HIGHSCORE FUNCTION
const setHighscore = function () {
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = score;
  }
};

// LOSING GAME FUNCTION
const loseGame = function () {
  if (score > 1) {
    score--;
    textScore.textContent = score;
  } else {
    textMessage.textContent = '💥 You lost the game';
    textScore.textContent = 0;
  }
};

// RESET FUNCTION
const resetGame = function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  textMessage.textContent = 'Start guessing...';
  textScore.textContent = score;
  textNumber.textContent = `?`;
  textNumber.style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
};

// 'Check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // When there's no input
  if (!guess) {
    textMessage.textContent = '⛔ No number! ';

    // When player wins
  } else if (guess === secretNumber) {
    textMessage.textContent = '🎉 Correct Number!';
    textNumber.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    textNumber.style.width = '30rem';
    setHighscore();

    // When guess is wrong
  } else if (guess != secretNumber) {
    loseGame();
    textMessage.textContent =
      guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
  }
});

// Play again button
document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
