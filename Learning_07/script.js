'use strict';

// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [70, 99];
let currentScore = 0;
let activePlayer = 0;
let dice = 0;
let playing = true;

// Functions
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const rollDice = function () {
  if (playing) {
    dice = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1:
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
};

const holdDice = function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      btnRoll.classList.add('locked');
      btnHold.classList.add('locked');
      btnRoll.textContent = '🔒 Roll dice';
      btnHold.textContent = '🔒 Hold';
    } else {
      switchPlayer();
    }
  }
};

const resetGame = function () {
  const scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let dice = 0;

  for (let i = 0; i < 2; i++) {
    document.getElementById(`score--${i}`).textContent = 0;
    document.getElementById(`current--${i}`).textContent = 0;
    console.log(i);
  }
};

// Rolling dice functionality
btnRoll.addEventListener('click', rollDice);

// Holding dice functionality
btnHold.addEventListener('click', holdDice);

// Reset game functionality
btnNew.addEventListener('click', resetGame);

/*

document.addEventListener('keydown', function (e) {
  if (activePlayer === 0) {
    if (e.key === 'q') {
      rollDice();
    }

    if (e.key === 'w') {
      holdDice();
      switchPlayer();
    }
  } else {
    if (e.key === 'o') {
      rollDice();
    }

    if (e.key === 'p') {
      holdDice();
      switchPlayer();
    }
  }
});

*/
