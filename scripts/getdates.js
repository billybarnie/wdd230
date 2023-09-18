let currentDate = new Date().getFullYear();
document.querySelector('#year').textContent = currentDate;


document.getElementById('#lastmodified').innerHTML = new Date(document.lastModified);