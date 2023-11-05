let modeButton = document.querySelector("#mode");
let body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
        const lights = document.getElementsByClassName('light');
        
        let i = lights.length-1; 

        for(i; i>=0; i--) {

            lights[i].classList.replace("light","dark"); 
        };
		body.style.background = "#000";
		body.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
        const darks = document.getElementsByClassName('dark');
        let i = darks.length-1; 

        for(i; i>=0; i--) {

            darks[i].classList.replace("dark","light");
        };
		body.style.background = "#FFBCC1";
		body.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});