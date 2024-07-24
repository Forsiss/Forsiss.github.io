function calculateTotal() {
    const inputElement = document.querySelector('.js-cost-input');
    let inputValue = Number(inputElement.value) * 100;
    if (inputValue < 4000) {
        (inputValue += 1000);
    } else {
        (inputValue);
    }
    document.querySelector('.js-total-cost')
        .innerHTML = `$${(inputValue / 100)}`
}

function costKeydown(event) {
    if(event.key === 'Enter'){
        calculateTotal();
    }
}