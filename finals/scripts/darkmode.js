document.addEventListener('DOMContentLoaded', () => {
    const switchBox = document.querySelector('.switch input[type="checkbox"]');
    const body = document.querySelector('main');

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        switchBox.checked = true;
        enableDarkMode();
    }

    switchBox.addEventListener('change', () => {
        if (switchBox.checked) {
            enableDarkMode();

            localStorage.setItem('darkMode', 'true');
        } else {
            disableDarkMode();

            localStorage.setItem('darkMode', 'false');
        }
    });

    function enableDarkMode() {
        body.style.background = 'black';
        body.style.color = 'white';
    }

    function disableDarkMode() {
        body.style.background = 'white';
        body.style.color = 'black';
    }
});