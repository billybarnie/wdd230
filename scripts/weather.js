const currentTemp = document.querySelector (' #current-temp');
const weatherIcon = document.querySelector ('#weather-icon');
const captionDesc = document.querySelector ('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=32.815542&lon=-96.969677&units=imperial&appid=57e8a0d56447b6d63f2e95f0a11177e2';

async function apiFetch() {
    try {
    const response = await fetch (url);
    if (response.ok) {
    const data = await response.json();

    displayResults(data);

    } else {
    throw Error (await response.text());
    }
    } catch(error) {
    console.log(error);

    };
};

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
};

apiFetch ();
