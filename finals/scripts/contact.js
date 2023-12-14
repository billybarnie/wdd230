const fName = document.getElementById('fname');
const lName = document.getElementById('lname');
const mail = document.getElementById('mail');

const fnError = document.querySelector("#error-message");
const lnError = document.querySelector("#error-message1");
const mError = document.querySelector("#valmail");

fName.addEventListener("blur", () => validateField(fName, fnError, "Please enter your name without numbers or symbols!"));
lName.addEventListener("blur", () => validateField(lName, lnError, "Please enter your name without numbers or symbols!"));
mail.addEventListener("blur", () => validateEmail(mail, mError, "Enter a valid email address!"));

function validateField(element, errorElement, errorMessage) {
    const value = element.value;

    if (value === '') {
        showError(element, errorElement, "Please enter a response!");

    } else if (!/^[a-zA-Z]+$/.test(value) && !/[^a-zA-Z0-9]/.test(value)) {

        showError(element, errorElement, errorMessage);
    } else {
        showSuccess(element, errorElement);
    }
}

function validateEmail(element, errorElement, errorMessage) {
    const value = element.value;

    if (value === '') {
        showError(element, errorElement, "Please enter a response!");

    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {

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