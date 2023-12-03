let myDate = new Date();
let myYear = myDate.getFullYear();

document.querySelector("#year").textContent = myYear;

let lastModified = new Date(document.lastModified);
document.querySelector(".modded").textContent = lastModified;