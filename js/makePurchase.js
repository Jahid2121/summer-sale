const totalSpan = document.getElementById("total");
const makePurchaseButton = document.getElementById("make-purchase");


totalSpan.addEventListener("DOMSubtreeModified", updatePurchaseButton);

function updatePurchaseButton() {
  const totalValue = parseFloat(totalSpan.textContent);
  if (totalValue >= 1) {
    makePurchaseButton.disabled = false;
  } else {
    makePurchaseButton.disabled = true;
  }
}


updatePurchaseButton();