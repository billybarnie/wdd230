document.addEventListener("DOMContentLoaded", function () {

    var currentPage = window.location.href;

    var navLinks = document.querySelectorAll(".navigate a");

    navLinks.forEach(function (link) {
        if (link.href === currentPage) {

            link.classList.add("current-page");
            link.style.color = "white";
        }
    });
});