'use strict';

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scoreValue = document.querySelector('.current-score');
const diceImg = document.querySelector('.dice');
const totalScoreValue = document.querySelector('.score');

let dice = 0;
let score = 0;
let totalScore = 0;

diceImg.style.display = 'hidden';
totalScoreValue.textContent = totalScore;

const rollDice = function () {
  dice = Math.trunc(Math.random() * 6 + 1);
  diceImg.src = `dice-${dice}.png`;
  if (dice !== 1) {
    score += dice;
    scoreValue.textContent = score;
  } else {
    totalScore++;
    totalScoreValue.textContent = totalScore;
    score = 0;
    scoreValue.textContent = score;
  }
};

const holdDice = function () {
  totalScore += score;
  totalScoreValue.textContent = totalScore;
  score = 0;
  scoreValue.textContent = score;
};

btnRoll.addEventListener('click', rollDice);
btnHold.addEventListener('click', holdDice);

// document.querySelector('.current-score').textContent = '12';
