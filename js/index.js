function handleProductCard(target){
    const selectedItemContainer = document.getElementById('selected-items')
    const productName = target.childNodes[3].childNodes[5].innerText
    const li = document.createElement('li')
    li.innerText = productName;
    selectedItemContainer.appendChild(li)
}