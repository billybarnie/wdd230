let currentDate = new Date().getFullYear();
document.querySelector('#year').textContent = currentDate;

let lastModified = new Date(document.lastModified);
document.getElementById('lastmodified').textContent = lastModified;