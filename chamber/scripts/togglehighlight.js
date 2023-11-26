document.addEventListener('DOMContentLoaded', function () {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var currentPageUrl = window.location.href;
    var navLinks = document.querySelectorAll('.navigate a');

    if (viewportWidth > 560) {
        navLinks.forEach(function (link) {
            if (link.href === currentPageUrl) {
                link.parentElement.classList.add('current-page');
            }
        });
    }
});