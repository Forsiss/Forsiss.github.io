/*
const age = 13;

if (age < 16) {
    console.log('False');
} else if (age <=14) {
    console.log('False');
} else {
    console.log('True');
};
*/
/*
let hour = 15.59;
name = 'Ghost';

if(hour >= 6 && hour <= 12.59){
    console.log(`Good morning! ${name}!`);
} else if (hour >= 13 && hour <=17.59){
    console.log(`Good afternoon! ${name}!`);
} else if (hour >= 18 && hour <= 23.59){
    console.log(`Good night! ${name}!`);
};


let age = '65';
Holiday = true;

if((age <= 6 || age >= 65) && !Holiday){
    console.log('Discount');
} else {
    console.log('No discount');
};
*/

/*
const randomNumber = Math.random();
let result;

if(randomNumber < 0.5){
    result = 'heads';
} else {
    result = 'tails';
};

const guess = 'heads';

if(guess === result){
    console.log('You win.');
} else {
    console.log('You lose.');
}
*/

const guess = 'heads';
const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
}

function playGame(guess){
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    console.log(guess === result ? 'You win.' : 'You lose.');

    if(guess === result){
        score.wins++;
    } else {
        score.losses++;
    };
    console.log(score);
    localStorage.setItem('score', JSON.stringify(score));
};
