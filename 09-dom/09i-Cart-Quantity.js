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

function cartQuantityInput(){
    quantityElement = document.querySelector('.showCartQuantity');
    quantityValue = document.querySelector('.cartQuantity')
        .innerHTML = `Cart Quantity: ${cartQuantity}`;
}