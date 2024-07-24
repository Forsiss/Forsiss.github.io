
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

  alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.`);
}