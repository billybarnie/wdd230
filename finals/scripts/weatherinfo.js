const apiKey = '57e8a0d56447b6d63f2e95f0a11177e2';
const latitude = 32.839007;
const longitude = -96.979618;

async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    displayCurrentWeather(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

function displayCurrentWeather(data) {
  const currentTemperature = data.main.temp;
  const currentHumidity = data.main.humidity;
  const currentCondition = data.weather[0].description;

  const currentWeatherElement = document.getElementById('currentWeather');
  currentWeatherElement.innerHTML = `
    <p>Current Temperature: ${currentTemperature} &#8457;</p>
    <p>Current Humidity: ${currentHumidity}%</p>
    <p>Condition: ${currentCondition}</p>
  `;
}

fetchWeather();

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=32.839007&lon=-96.979618&units=imperial&appid=57e8a0d56447b6d63f2e95f0a11177e2';

async function apiFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayTomorrowForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayTomorrowForecast(data) {
    const currentDate = new Date();
    const headers = document.createElement('div');
    const tomorrow = new Date(currentDate);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const tomorrowHeader = document.createElement('h3');
    tomorrowHeader.textContent = dayOfWeek(tomorrow.getDay());
    headers.appendChild(tomorrowHeader);

    const temperatures = document.createElement('div');

    data.list.forEach((day) => {
        const itemDate = new Date(day.dt * 1000);
        if (itemDate.getDate() === tomorrow.getDate() && itemDate.getHours() === 12) {
            const todaytemp = document.createElement('p');
            todaytemp.textContent = `${Math.round(day.main.temp)} °F`;
            temperatures.appendChild(todaytemp);
        }
    });

    const forecastElement = document.getElementById('forecast');
    forecastElement.innerHTML = '';
    forecastElement.appendChild(headers);
    forecastElement.appendChild(temperatures);
}

function dayOfWeek(day) {
    if (day >= 7) {
        day -= 7;
    }

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

apiFetch();
