'use strict';

let randomNumber = Math.trunc(Math.random() * 20 + 1);
console.log(randomNumber);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //if no guess
  if (!guess) document.querySelector('.message').textContent = '⛔️ No number!';
  //if guess = random number
  else if (guess === randomNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
    if (score > highscore) {
      highscore = score;
    }

    document.querySelector('.highscore').textContent = highscore;
  } else if (guess > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
    //if guess is less than random number
  } else if (guess < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNumber);
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';

  document.querySelector('.highscore').textContent = highscore;
});
