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
    if(inputValue < 40) {
        inputValue += 10;
    } else {
        inputValue;
    }
    document.querySelector('.js-total-cost')
        .innerHTML = `$${inputValue}`;
};

function costKeydown(event) {
    if(event.key === 'Enter'){
        calculateTotal();
    }
};
