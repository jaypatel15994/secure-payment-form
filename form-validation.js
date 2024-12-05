document.getElementById("paymentForm").addEventListener("submit", function (event) {
    // Prevent default form submission for validation
    event.preventDefault();
  
    let valid = true;
    let errorMessage = "";

    // Name on Card validation
    const cardName = document.getElementById("cardName").value.trim();
    if (!cardName) {
        errorMessage += "Name on card field is required. ";
        valid = false;
    }
  
    // Credit Card Number validation
    const cardNumber = document.getElementById("cardNumber").value.replace(/\s+/g, "");
    const cardNumberRegex = /^[0-9]{13,19}$/; // Accepts 13-19 digits
    if (!cardNumberRegex.test(cardNumber)) {
        errorMessage += "Invalid credit card number. ";
        valid = false;
    }
  
    // Expiration Date validation
    const cardExpiry = document.getElementById("cardExpiry").value;
    const arrayExpiry = cardExpiry.split('-');
    const monthExpiry = arrayExpiry.pop();
    const yearExpiry = arrayExpiry.shift();
    if (!cardExpiry) {
        errorMessage += "Expiration date field is required. ";
        valid = false;
    } else if (new Date(yearExpiry, monthExpiry + 1, 0) < new Date()) {
        errorMessage += "Expiration date field must be in future. ";
        valid = false;
    }
  
    // CVV validation
    const cardCvv = document.getElementById("cardCvv").value;
    const cvvRegex = /^[0-9]{3,4}$/; // 3-4 digits for CVV
    if (!cvvRegex.test(cardCvv)) {
        errorMessage += "Invalid CVV number. ";
        valid = false;
    }
  
    // If all fields are valid, submit the form.
    if (valid) {

        /* Since we are working with payment related data, we can also encrypt the data before 
        sending it to server with available encryption tools/library. */
        
        hideError();
        alert("Payment submitted successfully!");
        this.submit();
    }else{
        showError(errorMessage);
    }
});
  
function showError(message) {
    const errorSpan = document.getElementById("error-text");
    errorSpan.style.display = "block";
    errorSpan.textContent = message;
}

function hideError(elementId) {
    const errorSpan = document.getElementById("error-text");
    errorSpan.style.display = "none";
}
