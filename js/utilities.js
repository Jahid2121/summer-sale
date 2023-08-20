function getInnerText(fieldId){
    const field = document.getElementById(fieldId)
    const fieldTextValueStr = field.innerText
    const TextValue = parseFloat(fieldTextValueStr)
    return TextValue
}