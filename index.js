

let totalPrice = 0;
let serialNumber = 1;
let discount = 0;

function cardHandeler(data) {
    const itemName = data.parentNode.querySelector(".card-title").textContent;

    const selectedItemsList = document.querySelector(".selected-list");
    const li = document.createElement("li");
    li.textContent = `${serialNumber}. ${itemName}`;
    selectedItemsList.appendChild(li);
    
    serialNumber++;
    const price = parseInt(data.parentNode.querySelector(".itemPrice").textContent); // Change this line
    totalPrice += price; 
    document.getElementById("totalPrice").innerText=totalPrice;
    updateButtonStates();
}




function updateButtonStates() {
  const applyButton = document.querySelector('.cupon-area button');
  applyButton.addEventListener('click', applyCoupon);
  const makePurchaseButton = document.getElementById('submitButton');

  if (totalPrice >= 200) {
    applyButton.removeAttribute('disabled');
  } else {
    applyButton.setAttribute('disabled', 'disabled');
  }

  if (totalPrice > 0) {
    makePurchaseButton.removeAttribute('disabled');
  } else {
    makePurchaseButton.setAttribute('disabled', 'disabled');
  }
}

function applyCoupon() {
  const couponCode = 'SELL200'; 
  const couponInput = document.querySelector('.cupon-area input');

  if (couponInput.value === couponCode) {
    discount = Math.floor(totalPrice * 0.2); 
  } else {
    discount = 0;
  }

  const discountElement = document.getElementById('discount');
  discountElement.innerText = `${discount}.00 TK`;

  const totalWithDiscount = totalPrice - discount;
  const totalElement = document.getElementById('total');
  totalElement.innerText = `${totalWithDiscount}.00 TK`;
  updateButtonStates();
}


function resetRightArea() {
  const selectedItemsList = document.querySelector(".selected-list");
  selectedItemsList.innerHTML = ""; 

  totalPrice = 0;
  serialNumber = 1; 
  discount = 0;

  
  document.getElementById("totalPrice").innerText = totalPrice;
  document.getElementById("discount").innerText = `${discount}.00`;
  document.getElementById("total").innerText = `${totalPrice}.00`;

  const couponInput = document.querySelector('.cupon-area input');
  couponInput.value = ''; 

  updateButtonStates(); 
}

document.querySelector('.modal-action button').addEventListener('click', resetRightArea);


document.addEventListener('DOMContentLoaded', function() {
  const applyButton = document.querySelector('.cupon-area button');
  const couponInput = document.querySelector('.cupon-area input');
  const applyCouponCodeButton = document.getElementById('applyCouponCode');

  applyButton.addEventListener('click', applyCoupon);
  applyCouponCodeButton.addEventListener('click', function() {
    couponInput.value = 'SELL200';
  });

  // Rest of your code...
});






