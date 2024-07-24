let cartQuantity = 0;


function updateCartQuantity(Quantity){
  if(cartQuantity + Quantity > 10){
    alert('The cart is full');
    return;
  } 
  
  if (cartQuantity + Quantity < 0){
    alert('The cart is empty');
    return;
  }

    cartQuantity += Quantity;
    console.log(`Cart quantity: ${cartQuantity}`);
  }


/*
const name = "Forsiss21";
console.log(typeof name);
console.log(`My name is: ${name}`);

const coffee = 5,
  bagels = 3,
  soup = 9;

let tax = (coffee + bagels * 2 + soup) * 0.1;
cost = (coffee + (bagels * 2) + soup);
totalcost = cost + tax;
console.log(`Order cost: $${cost}`);
console.log(`Total cost: $${totalcost}`)
*/