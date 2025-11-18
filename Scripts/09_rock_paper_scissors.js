let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };

    function updateScoreElement() {
      document.querySelector('.js-scores').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    updateScoreElement();

    function pickComputerMove() {
      const randomNumber = Math.random();

      let computerMove = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
      } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
      } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
      }

      return computerMove;

    };

    function playGame(playerMove) {

      const computerMove = pickComputerMove();

      let result = "";

      if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
          result = 'You lose.';
        } else if (computerMove === 'paper') {
          result = 'You win.'
        } else if (computerMove === 'scissors') {
          result = 'You tied.';
        };

      } else if (playerMove === 'paper') {

        if (computerMove === 'rock') {
          result = 'You win.';
        } else if (computerMove === 'paper') {
          result = 'You tied.'
        } else if (computerMove === 'scissors') {
          result = 'You lose.';
        }

      } else if (playerMove === 'rock') {

        if (computerMove === 'rock') {
          result = 'You tied.';
        } else if (computerMove === 'paper') {
          result = 'You lose.';
        } else if (computerMove === 'scissors') {
          result = 'You win.';
        }

      }

      if (result === "You win.") {
        score.wins += 1;
      } else if (result === "You lose.") {
        score.losses += 1;
      } else if (result === "You tied.") {
        score.ties += 1;
      }

      localStorage.setItem('score', JSON.stringify(score));

      updateScoreElement();

      document.querySelector('.js-results').innerHTML = result;

      document.querySelector('.js-moves').innerHTML = `you:
    <img src="Assets/Images/${playerMove}-emoji.png" alt="rock-emoji" width="50" height="50"> computer:
    <img src="Assets/Images/${computerMove}-emoji.png" alt="scissors-emoji" width="50" height="50">.`;

    };
