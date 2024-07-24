function calculateTotal() {
    inputElement = document.querySelector('.js-cost-input');
    inputValue = Number(inputElement.value);
    if(inputValue < 40) {
        inputValue += 10;
    } else {
        inputValue;
    }
    document.querySelector('.js-total-cost')
        .innerHTML = `$${inputValue}`
}

function costKeydown(event) {
    if(event.key === 'Enter'){
        calculateTotal();
    }
}