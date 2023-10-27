const visited = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls"));

if (numVisits == 0) {
    visited.textcontent = "Welcome new comer!";
}
else {
    visited.textcontent = numVisits;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
