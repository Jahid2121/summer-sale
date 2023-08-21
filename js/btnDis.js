const applyButton = document.getElementById('Apply');


applyButton.disabled = true;



const inputField = document.getElementById('coupon-field')
inputField.addEventListener('input', function() {

  const inputValue = inputField.value;
  const totalPriceField = document.getElementById('total')
    const totalPriceStr = totalPriceField.innerText
    const totalPrice = parseFloat(totalPriceStr)

  
  if(totalPrice >= 200 && inputValue === 'SELL200'  ) {

    applyButton.disabled = false;   
  }
  
  else {

    applyButton.disabled = true;
  }
});
