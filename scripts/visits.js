const visited = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits == 0) {
    visited.textContent = "Welcome new comer!";
} else {
    visited.textContent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
