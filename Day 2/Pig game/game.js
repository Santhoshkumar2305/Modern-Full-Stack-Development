const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let score1, score2, currentScore, activePlayer, playing,rollLoop;

const init = function () {
  score1 = 0;
  score2 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.style.display = 'none';
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  clearInterval(rollLoop);
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = 1 - activePlayer;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  rollLoop = setInterval(() => {
    if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.jpg`;
    diceEl.style.display = 'block';

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
  },2000);
});

btnHold.addEventListener('click', function () {
  clearInterval(rollLoop);
  if (playing) {
    switch (activePlayer) {
      case 0:
        score1 += currentScore;
        score0El.textContent = score1;
        if (score1 >= 100) {
          playing = false;
          diceEl.style.display = 'none';
          player0El.classList.add('player--winner');
          player0El.classList.remove('player--active');
          alert('Player 1 wins!');
        } else {
          switchPlayer();
        }
        break;
      case 1:
        score2 += currentScore;
        score1El.textContent = score2;
        if (score2 >= 100) {
          playing = false;
          diceEl.style.display = 'none';
          player1El.classList.add('player--winner');
          player1El.classList.remove('player--active');
          alert('Player 2 wins!');
        } else {
          switchPlayer();
        }
        break;
    }
  }
});

btnNew.addEventListener('click', init);
