const apiKey = '57e8a0d56447b6d63f2e95f0a11177e2';
const latitude = 20.500682;
const longitude = -86.951317;

async function fetchForecast() {

  const forecastResponse = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`);
  const forecastData = await forecastResponse.json();

  displayMaxTemperatureForCurrentDay(forecastData);
}

function displayMaxTemperatureForCurrentDay(forecastData) {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  let maxTemperature = Number.MIN_SAFE_INTEGER;

  forecastData.list.forEach((day) => {
    const itemDate = new Date(day.dt * 1000);
    if (itemDate.getDate() === currentDay && day.main.temp > maxTemperature) {
      maxTemperature = day.main.temp;
    }
  });

  const maxTempMessage = document.getElementById('maxTempMessage');
  maxTempMessage.textContent = `Max Temperature Today: ${Math.round(maxTemperature)} °F`;

  showMaxTempBanner();
}

function showMaxTempBanner() {
  const maxTempBanner = document.getElementById('maxTempBanner');
  maxTempBanner.style.display = 'block';
}

function closeMaxTempBanner() {
  const maxTempBanner = document.getElementById('maxTempBanner');
  maxTempBanner.style.display = 'none';
}

fetchForecast();

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

function roundDownToNearestTen(number) {
    return Math.floor(number / 10) * 10;
  }

  function determineWeatherDescription(temperature, windSpeed) {
    if (temperature > 80) {
      return 'It feels warm.';
    } else if (temperature > 100) {
        return 'it feels hot.'
    } else if (temperature < 50) {
      return 'It feels cold.';
    } else if (windSpeed >= 5 && windSpeed <= 15) {
      return 'There is a gentle breeze.';
    } else {
      return 'The weather is normal.';
    }
  }
  

function displayCurrentWeather(data) {
  const currentTemperature = data.main.temp;
  const currentHumidity = data.main.humidity;
  const currentCondition = data.weather[0].description;
  const weatherIconCode = data.weather[0].icon;
  const cityName = data.name;
  const windSpeed = data.wind.speed;

  const weatherDescription = determineWeatherDescription(currentTemperature, windSpeed);



  const currentWeatherElement = document.getElementById('currentWeather');
  currentWeatherElement.innerHTML = `
    <h2>${cityName}</h2>
    <p>Feels like ${roundDownToNearestTen(Math.round(currentTemperature))}. ${weatherDescription}</p>
    <p><img src="https://openweathermap.org/img/w/${weatherIconCode}.png" alt="Weather Icon"> ${Math.round(currentTemperature)} &#8457;</p>
    <p>Current Humidity: ${currentHumidity}%</p>
    <p>Condition: ${currentCondition}</p>
  `;
}

fetchWeather();

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.500682&lon=-86.951317&units=imperial&appid=57e8a0d56447b6d63f2e95f0a11177e2';

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
        if (itemDate.getDate() === tomorrow.getDate() && itemDate.getHours() === 15) {
            const todaytemp = document.createElement('p');
            todaytemp.textContent = `Tomorrow at 3PM: ${Math.round(day.main.temp)} °F`;
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
