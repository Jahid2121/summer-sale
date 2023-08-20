let total = parseFloat(0)
function handleProductCard(target){
    

     const selectedProductContainer = document.getElementById('selected-product')
    const productName = target.childNodes[3].childNodes[5].innerText
    const li = document.createElement('li')
    li.innerText = productName;
    const array = selectedProductContainer.appendChild(li) 
    
    const price = target.childNodes[3].childNodes[7].innerText.split(' ')[0]
    total = total + parseFloat(price)
    
    const totalContainer = document.getElementById('total')
    totalContainer.innerText = total

    
}




