let modeButton = document.querySelector("#mode");
let main = document.querySelector("main");
//let section = document.querySelectorAll("section");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
        const lights = document.getElementsByClassName('light');
        console.log(lights.length);
        console.log(lights);
        let i = 0;
        for(i=0; i<lights.length; i++) { 
            //section.style.background = "darkgrey";
            console.log(lights[i]);
            lights[i].classList.replace("light","dark");
        };
        
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
        const darks = document.getElementsByClassName('dark');
        let i = 0;
        for(i=0; i<darks.length; i++) { 
            //section.style.background = "white";
            darks[i].classList.replace("dark","light");
        };
        //section.style.background = "#FFBCC1";
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