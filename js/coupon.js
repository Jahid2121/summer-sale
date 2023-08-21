

document.getElementById('Apply').addEventListener('click', function(){
    const inputField = document.getElementById('coupon-field')
    const inputValue = inputField.value 

    const totalPriceField = document.getElementById('total')
    const totalPriceStr = totalPriceField.innerText
    const totalPrice = parseFloat(totalPriceStr)

    const allTotalField = document.getElementById('allTotal')
    
    const discField = document.getElementById('discount-field')
    const disc = 20

    const applyButton = document.getElementById('Apply');

    if(totalPrice >= 200 && inputValue === 'SELL200' ){
      const discTaka = (totalPrice * disc) / 100
      const discountedPrice = totalPrice - discTaka
      allTotalField.innerText = discountedPrice.toFixed(2)
      discField.innerText = discTaka.toFixed(2)
      
      
    }
    else{
      
      
      
    }
    

})