function requestNow() {
    const buttonElem = document.querySelector('.Request-now');

    if(buttonElem.innerHTML === 'Request now'){
        buttonElem.classList.remove('requested');
        buttonElem.innerHTML = 'Schedule for later';
    }else{
        buttonElem.classList.add('requested');
        buttonElem.innerHTML = 'Request now';
    }
};


function togglegButton(){
  const button = document.querySelector('.gamingButton');
  if(!button.classList.contains('is-toggled')){
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function togglemButton(){
  const button = document.querySelector('.musicButton');
  if(!button.classList.contains('is-toggled')){
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function toggleEnableButton(){
  const button = document.querySelector('.enableButton');
  if(!button.classList.contains('is-toggled')){
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}


function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}