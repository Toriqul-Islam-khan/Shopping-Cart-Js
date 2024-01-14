// For Case
function NumberofCase(isIncrease) {
    const caseString = document.getElementById('case-number').value
    const caseIntNumber = parseInt(caseString);
    let caseNumber
    if (isIncrease === true) {
        caseNumber = caseIntNumber + 1;
        document.getElementById('case-number').value = caseNumber;

    }
    else {
        caseNumber = caseIntNumber - 1;
        if (caseNumber < 0) {
            return;
        }
        document.getElementById('case-number').value = caseNumber;
    }
    const casePrice = 59 * caseNumber;
    document.getElementById('Price').innerText = casePrice;

    total();

}

// for Phone
function NumberofPhone(isIncrease) {
    const phoneString = document.getElementById('phoneNumber').value
    const phoneInt = parseInt(phoneString);
    let phone;
    if (isIncrease === true) {
        phone = phoneInt + 1;
        document.getElementById('phoneNumber').value = phone;
    }
    else {
        phone = phoneInt - 1;
        if (phone < 0) {
            return
        }
        document.getElementById('phoneNumber').value = phone;
    }
    const phonePrice = 1219 * phone;
    document.getElementById('pricePhone').innerText = phonePrice;
    total();


}

function total() {
    const phonerDam = parseInt(document.getElementById('pricePhone').innerText)
    const caseerDam = parseInt(document.getElementById('Price').innerText)
    const SubTotal = phonerDam + caseerDam;
    document.getElementById('subtotal').innerText = SubTotal;

    const tax =   .10 * SubTotal;
    document.getElementById('tax').innerText=tax.toFixed(2);
   
    const totalpay= SubTotal+tax;
    document.getElementById('total').innerText=totalpay.toFixed(2);
}
