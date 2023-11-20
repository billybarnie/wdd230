const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecast = document.querySelector('#forecast');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=45.52&lon=-122.99&units=imperial&appid=57e8a0d56447b6d63f2e95f0a11177e2';
const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=45.52&lon=-122.99&units=imperial&appid=57e8a0d56447b6d63f2e95f0a11177e2';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
    try {
        const response = await fetch(forecasturl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {
    const currentDate = new Date();
    const headers = document.createElement('div');

    for (let i = 1; i <= 3; i++) {
        const today = document.createElement('h3');
        today.textContent = dayOfWeek(currentDate.getDay() + i);
        headers.appendChild(today);
    }

    const temperatures = document.createElement('div');

    data.list.forEach((day) => {
        switch (day.dt_txt) {
            default:
                break;
            case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 1} 12:00:00`:
            case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 2} 12:00:00`:
            case `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate() + 3} 12:00:00`:

                const todaytemp = document.createElement('p');

                todaytemp.textContent = `${day.main.temp} °F`;
                temperatures.appendChild(todaytemp);
        }

    });

    forecast.appendChild(headers);
    forecast.appendChild(temperatures);
}

function dayOfWeek(day) {
    switch (day) {

        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        default:
            return 'Error';
    }
}