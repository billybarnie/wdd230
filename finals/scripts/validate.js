document.addEventListener('DOMContentLoaded', function () {
    const personalInfoForm = document.querySelector('.personalinfo form');

    personalInfoForm.addEventListener('submit', function (event) {
        const firstName = document.querySelector('input[name="firstname"]');
        const middleInitial = document.querySelector('input[name="minitial"]');
        const lastName = document.querySelector('input[name="lastname"]');
        const phoneNumber = document.querySelector('input[name="phone"]');
        const email = document.querySelector('input[name="email"]');
        const stateOrCountry = document.querySelector('input[name="state"]');

        if (!isValidName(firstName.value)) {
            handleInvalidInput(firstName, "Please enter a valid first name.");
            event.preventDefault();
        } else {
            resetInputStyle(firstName);
        }

        if (middleInitial.value && !isValidMiddleInitial(middleInitial.value)) {
            handleInvalidInput(middleInitial, "Please enter a valid middle initial.");
            event.preventDefault();
        } else {
            resetInputStyle(middleInitial);
        }

        if (!isValidName(lastName.value)) {
            handleInvalidInput(lastName, "Please enter a valid last name.");
            event.preventDefault();
        } else {
            resetInputStyle(lastName);
        }

        if (!isValidPhoneNumber(phoneNumber.value)) {
            handleInvalidInput(phoneNumber, "Please enter a valid phone number.");
            event.preventDefault();
        } else {
            resetInputStyle(phoneNumber);
        }

        if (!isValidEmail(email.value)) {
            handleInvalidInput(email, "Please enter a valid email address.");
            event.preventDefault();
        } else {
            resetInputStyle(email);
        }

        if (!isValidStateOrCountry(stateOrCountry.value)) {
            handleInvalidInput(stateOrCountry, "Please enter a valid state or country.");
            event.preventDefault();
        } else {
            resetInputStyle(stateOrCountry);
        }
    });

    function isValidName(name) {
        return /^[A-Za-z]+$/.test(name);
    }

    function isValidMiddleInitial(middleInitial) {
        return /^[A-Za-z]$/.test(middleInitial);
    }

    function isValidPhoneNumber(phoneNumber) {
        return /^[0-9]{10}$/.test(phoneNumber);
    }

    function isValidEmail(email) {
        return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    }

    function isValidStateOrCountry(stateOrCountry) {
        return /^[A-Za-z\\]*$/.test(stateOrCountry);
    }

    function handleInvalidInput(inputField, errorMessage) {
        inputField.style.backgroundColor = "#fff0f3";
        let errorSpan = inputField.nextElementSibling;
        if (!errorSpan || errorSpan.tagName !== 'SPAN') {
            errorSpan = document.createElement('span');
            inputField.parentNode.insertBefore(errorSpan, inputField.nextSibling);
        }
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = 'red';
    }

    function resetInputStyle(inputField) {
        inputField.style.backgroundColor = "";
        let errorSpan = inputField.nextElementSibling;
        if (errorSpan && errorSpan.tagName === 'SPAN') {
            inputField.parentNode.removeChild(errorSpan);
        }
    }
});