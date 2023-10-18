let modeButton = document.querySelector("#mode");
let main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
        const lights = document.getElementsByClassName('light');
        
        let i = lights.length-1; 

        for(i; i>=0; i--) {

            lights[i].classList.replace("light","dark"); 
        };
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
        const darks = document.getElementsByClassName('dark');
        let i = darks.length-1; 

        for(i; i>=0; i--) {

            darks[i].classList.replace("dark","light");
        };
		main.style.background = "#FFBCC1";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});