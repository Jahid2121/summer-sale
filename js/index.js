let total = parseFloat(0)

const cartProducts = [];

function handleProductCard(target){
    

     const selectedProductContainer = document.getElementById('selected-product')
    const productName = target.childNodes[3].childNodes[5].innerText
    const li = document.createElement('li')
    li.innerText = productName;
    selectedProductContainer.appendChild(li)

    const price = target.childNodes[3].childNodes[7].innerText.split(' ')[0]
    total = total + parseFloat(price)
    
    const totalContainer = document.getElementById('total')
    totalContainer.innerText = total

    
}




