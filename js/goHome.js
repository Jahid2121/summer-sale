const field = document.getElementById('go-home')
field.addEventListener('click', function(){
    const totalField = document.getElementById('total')
totalField.innerText = ''

const selectedProductContainer = document.getElementById('selected-product')
selectedProductContainer.innerText = ''
const inputField = document.getElementById('coupon-field')
    inputField.value = ''
    const allTotalField = document.getElementById('allTotal')
    allTotalField.innerText = ''
    const discField = document.getElementById('discount-field')
    discField.innerText = ''
})


