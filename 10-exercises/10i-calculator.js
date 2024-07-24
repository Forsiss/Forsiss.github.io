let calculation = localStorage.getItem('calculation') || '';
function updateCalculation(value){
    calculation += value;
    output();
    localStorage.setItem('calculation', calculation);
}


function saveCalculation() {
    localStorage.setItem('calculation', calculation);
};

function output(){
    numberElement = document.querySelector('.Result');
    numberValue =  document.querySelector('.numberOutput')
        .innerHTML = (`${calculation}`);
}