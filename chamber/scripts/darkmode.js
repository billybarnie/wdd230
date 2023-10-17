const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
        section.style.background = "white";
		main.style.background = "#FFBCC1";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});
function on() {
    document.getElementById("overlay").style.display = "block";
} 
function off() {
    document.getElementById("overlay").style.display = "none";
}