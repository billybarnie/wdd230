document.addEventListener('DOMContentLoaded', () => {
    const switchBox = document.querySelector('.switch input[type="checkbox"]');
    const body = document.querySelector('main');

    switchBox.addEventListener('change', () => {
        if (switchBox.checked) {
            body.style.background = 'black';
        } else {
            body.style.background = 'white';
        }
    });
});