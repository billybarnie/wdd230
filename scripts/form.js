const kp1 = document.querySelector("#pwd");
const kp2 = document.querySelector("#pwd1");
const email = document.querySelector("#email");
const rangeValue = document.querySelector("#rangevalue");
const range = document.querySelector("#rate");
const errorMessage = document.querySelector("#error-message");

kp2.addEventListener("focusout", checkSame);
email.addEventListener("focusout", checkValid);
range.addEventListener("change", displayRate);

function checkSame() {
	if (kp1.value !== kp2.value) {
		
		errorMessage.textContent = "Passwords don't match";
        errorMessage.style.color = "red";

		kp2.style.backgroundColor = "#fff0f3";
        kp1.value = "";
		kp2.value = "";
		kp1.focus();

	} else {

		kp2.style.backgroundColor = "lightgreen";
		kp2.style.color = "#000";
	}
}

function checkValid() {
    if (!email.contains("@byui.edu")) {

        email.style.backgroundColor = "#fff0f3";
        email.value = "";
        email.focus();

    }
}

function displayRate() {

    rangeValue.textContent = range.value;
    
}

