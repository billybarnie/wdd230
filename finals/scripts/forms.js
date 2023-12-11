const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const num = document.getElementById('num');
const mail = document.getElementById('mail');
const numorental = document.getElementById('numorental');

const fnError = document.querySelector("#error-message");
const lnError = document.querySelector("#error-message1");
const nError = document.querySelector("#phone");
const mError = document.querySelector("#valmail");
const nrError = document.querySelector("#numorental-error");

fName.addEventListener("focusout", () => validateField(fName, fnError, "Please enter your name without numbers or symbols!"));
lName.addEventListener("focusout", () => validateField(lName, lnError, "Please enter your name without numbers or symbols!"));
num.addEventListener("focusout", () => validatePhoneNumber(num, nError, "Please enter a valid number without letters!"));
mail.addEventListener("focusout", () => validateEmail(mail, mError, "Enter a valid email address!"));
numorental.addEventListener("focusout", () => validateNumber(numorental, nrError, "Please enter a valid number of rentals!"));

function validateField(element, errorElement, errorMessage) {
    const value = element.value;

    if (!/^[a-zA-Z]+$/.test(value) && !/[^a-zA-Z0-9]/.test(value)) {
        showError(element, errorElement, errorMessage);
    } else {
        showSuccess(element, errorElement);
    }
}

function validatePhoneNumber(element, errorElement, errorMessage) {
    const value = element.value;

    if (!/^[0-9]+$/.test(value) && !/^\d+$/.test(value)) {
        showError(element, errorElement, errorMessage);
    } else {
        showSuccess(element, errorElement);
    }
}

function validateEmail(element, errorElement, errorMessage) {
    const value = element.value;

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
        showError(element, errorElement, errorMessage);
    } else {
        showSuccess(element, errorElement);
    }
}

function validateNumber(element, errorElement, errorMessage) {
    const value = element.value;

    if (!/^\d+$/.test(value)) {
        showError(element, errorElement, errorMessage);
    } else {
        showSuccess(element, errorElement);
    }
}

function showError(element, errorElement, message) {
    element.style.backgroundColor = "#fff0f3";
    element.value = "";
    element.focus();
    errorElement.textContent = message;
    errorElement.style.color = "white";
}

function showSuccess(element, errorElement) {
    element.style.backgroundColor = "#C1FFC3";
    errorElement.textContent = "";
}