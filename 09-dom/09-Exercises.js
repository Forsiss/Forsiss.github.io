console.log(document.querySelector('.button'));
document.querySelector('.button2').innerHTML = ('9b done');


function keyDown(event){
    if(event.key === 'Enter'){
        inputElements();
    };

}

function inputElements(){
    nameElement = document.querySelector('.js-name-input');
    nameValue = document.querySelector('.js-message')
        .innerHTML = `Your name is ${nameElement.value}`;
}
    