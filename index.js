

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
    const price = document.querySelector(".itemPrice").textContent.split(" ")[0];
    totalPrice = parseInt(totalPrice) + parseInt(price);
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







