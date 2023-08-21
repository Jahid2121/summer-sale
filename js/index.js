let total = parseFloat(0);

function handleProductCard(target) {
    const selectedProductContainer = document.getElementById('selected-product');
    const productName = target.querySelector('.card-title').innerText;
    const price = parseFloat(target.querySelector('.text-lg.font-normal span').innerText);
    
    
    let productListItem = selectedProductContainer.querySelector(`li[data-product="${productName}"]`);
    
    if (productListItem) {
        
        const quantitySpan = productListItem.querySelector('.quantity');
        const quantity = parseInt(quantitySpan.innerText) + 1;
        quantitySpan.innerText = quantity;
    } else {
        
        const listItem = document.createElement('li');
        listItem.dataset.product = productName;
        listItem.innerHTML = `${productName} <span class="quantity">1</span>`;
        selectedProductContainer.appendChild(listItem);
    }

    
    total += price;
    const totalContainer = document.getElementById('total');
    totalContainer.innerText = total.toFixed(2); 
}
