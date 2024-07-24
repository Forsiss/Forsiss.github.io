function subscribe(){
    const buttonElem = document.querySelector('.subButton');

    if(buttonElem.innerHTML === 'Subscribe'){
        buttonElem.innerHTML = 'Subscribed';
        buttonElem.classList.add
        ('is-subscribed');
    } else{
        buttonElem.innerHTML = 'Subscribe';
        buttonElem.classList.remove('is-subscribed')
    }
};


function calculateTotal() {
    inputElement = document.querySelector('.js-cost-input');
    inputValue = Number(inputElement.value);
    if(inputValue <= 0){
        document.querySelector('.Error')
            .innerHTML = 'Error: cost cannot be less than 0';
        document.querySelector('.js-total-cost').innerHTML = '';
    } else if(inputValue > 0  && inputValue < 40) {
        inputValue += 10;
        document.querySelector('.Error')
            .innerHTML = ''
        document.querySelector('.js-total-cost')
            .innerHTML = `$${inputValue}`;
    } else {
        inputValue;
        document.querySelector('.Error')
            .innerHTML = ''
        document.querySelector('.js-total-cost')
            .innerHTML = `$${inputValue}`;
    }
};

function costKeydown(event) {
    if(event.key === 'Enter'){
        calculateTotal();
    }
};
