let lastModified = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = lastModified;

let currentDate = new Date().getFullYear();
document.querySelector('#year').textContent = currentDate;