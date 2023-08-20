

document.getElementById('Apply').addEventListener('click', function(){
    const inputField = document.getElementById('coupon-field')
    const inputValue = inputField.value 

    const totalPriceField = document.getElementById('total')
    const totalPriceStr = totalPriceField.innerText
    const totalPrice = parseFloat(totalPriceStr)

    const allTotalField = document.getElementById('allTotal')
    
    const discField = document.getElementById('discount-field')
    const disc = 20
    if(totalPrice >= 200 && inputValue === 'SELL200' ){
      const discTaka = (totalPrice * disc) / 100
      const discountedPrice = totalPrice - discTaka
      allTotalField.innerText = discountedPrice
      discField.innerText = discTaka
    }
    else{
      alert('please check upside you will find a coupon but make sure you buy more than 200')
    }
    

})


// document.getElementById('btn').addEventListener('click', function(){
//     const priceField = document.getElementById('price')
//     const priceStr = priceField.innerText
//     const price = parseFloat(priceStr)
//   const couponField = document.getElementById('coupon-field')
//   const couponValue = couponField.value

//   const payable = document.getElementById('payable-money')
//   const disc = (price * 30)/ 100;
//   const discPrice = price - disc;
//   payable.innerText = discPrice
//   if(couponValue === 'DISC30'){ 
//     payable.innerText = discPrice;
//     couponField.value = ''
//   }
//   else{
//     payable.innerText = price
//     alert('Invalid coupon')
//     couponField.value = ''
//   }
  

// })