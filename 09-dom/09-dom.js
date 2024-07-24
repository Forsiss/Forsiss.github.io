function subscribe(){
    const buttonElem = document.querySelector('.subButton');

    if(buttonElem.innerHTML === 'Subscribe'){
        buttonElem.innerHTML = 'Subscribed';
    } else{
        buttonElem.innerHTML = 'Subscribe';
    }
};



let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

function playFunction(){
    const randomNumber = Math.random();
  
    if(randomNumber >= 0 && randomNumber < 1 / 3){
        computerMove = 'Rock';
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
        computerMove = 'Paper';
    } else if(randomNumber >= 2 / 3 && randomNumber < 1){
        computerMove = 'Scissors';
    }
    console.log(computerMove);
  
    return computerMove;
  }
  
  function playGame(playerMove){
    const computerMove = playFunction();
    
    let result = '';
      
    if(playerMove === 'scissors'){
      if(computerMove === 'Rock'){
        result = 'You lose.';
      } else if (computerMove === 'Paper'){
        result = 'You win.';
      } else if (computerMove === 'Scissors'){
        result = 'Tie.';
      }
  
    } else if(playerMove === 'paper'){
      if(computerMove === 'Rock'){
        result = 'You win.';
      } else if (computerMove === 'Paper'){
        result = 'Tie.';
      } else if (computerMove === 'Scissors'){
        result = 'You lose.';
      }
      
    } else if(playerMove === 'rock'){
      if(computerMove === 'Rock'){
        result = 'Tie.';
      } else if (computerMove === 'Paper'){
        result = 'You lose.';
      } else if (computerMove === 'Scissors'){
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
        score.wins += 1;
    } else if (result === 'You lose.') {
        score.losses += 1;
    } else if (result === 'Tie.') {
        score.ties += 1;
    }
  
    localStorage.setItem('score', JSON.stringify(score));
    
    updateScore();

    document.querySelector('.js-result')
      .innerHTML = `${result}`;
    
    document.querySelector('.js-moves')
      .innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`
}


updateScore();

function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;
}
