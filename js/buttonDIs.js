const totalSpa = document.getElementById("total");
const applyButton = document.getElementById('Apply');
applyButton.disabled = true


totalSpa.addEventListener("DOMSubtreeModified", updateApplyButton);

function updateApplyButton() {
    const totalValue = parseFloat(totalSpa.textContent);
  if (totalValue >= 200) {
    applyButton.disabled = false;
  } else {
    applyButton.disabled = true;
  }
}
updateApplyButton();
