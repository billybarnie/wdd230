const banner = document.querySelector('#banner');
var today = new Date();
var weekdaysToCheck = [1, 2, 3];


if (weekdaysToCheck.includes(today.getDay())) {

    console.log(today.getDay());

    const message = document.createElement('div');
    const remove = document.createElement('span');

    remove.textContent = '❌'
    message.textContent = 'Come join us for a meet and greet this Wednesday at 7:00pm!';

    message.appendChild(remove);
    banner.appendChild(message);

    remove.addEventListener('click', () => {
        message.remove();
    });
}