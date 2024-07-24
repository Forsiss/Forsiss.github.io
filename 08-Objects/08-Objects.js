let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
};

/*
if (!score) {
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}; 
*/

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
  
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
  }


/*
const product = {
    name: 'socks',
    price: 1090
};
console.log(product);
console.log(product.name);
console.log(product.price);

product.name = 'cotton socks';
console.log(product);

product.newProperty = true;
console.log(product);

delete product.newProperty;
console.log(product);
*/

/*
const product2 = {
    name: 'shirt',
    'delivery-time':  '1 day',
    rating:{
        stars: 4.5,
        count: 87
    },
    fun: function function1 () {
        console.log('function inside object');
    }
};
console.log(product2);
console.log(product2.name);
console.log(product2['name']);
console.log(product2['delivery-time']);
console.log(product2['rating']['count']);
product2.fun();

console.log(typeof console.log);

console.log(JSON.stringify(product2));

const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));
*/

const object1 = {
  name: 'lol'
};

const object2 = object1;

object1.name = 'olo';
console.log(object1);
console.log(object2);

const object3 = {
  name: 'olo'
};
console.log(object3 === object1);
console.log(object1 === object2);

const object4 = {
  Flag: 'olo',
  price: 799
};

// const Flag = object4.name
const { Flag, price } =  object4;
console.log(Flag);
console.log(price);

const object5 = {
  Flag: Flag,
  /* 
  method: function function1() {
    console.log('method');
  } 
  */
  method() {
    console.log('method');
  }
};
console.log(object5);
object5.method();

const Amazon = {
  name: 'basketball',
  price: 2095
};

console.log(Amazon.price + 500)

console.log(Amazon['delivery-time'] = '3 days');

const item1 = {
  name: 'socks',
  price: 1099
};
const item2 = {
  name: 'shirt',
  price: 799
};

function comparePrice(item1, item2) {
  if(item1[price] < item2[price]) {
    return item1
  }else{
    return item2
  };
};

console.log(comparePrice(item1, item2));

function isSameItem(item1, item2){
  if(item1 == item2) {
    return true
  } else{
    return false
  }
};

console.log(isSameItem(item1, item2));

console.log('Good Morning'.toLowerCase());

console.log('test'.repeat(2));