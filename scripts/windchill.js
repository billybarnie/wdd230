function windChill() {

    let temperature = parseFloat(document.getElementById('temperature').value);
    let windSpeed = parseFloat(document.getElementById('windSpeed').value);

    let windChill;

    if (temperature <= 50 && windSpeed > 3.0)
    {
        windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);

        document.getElementById('result').textContent = "Wind Chill Factor: " + windChill.toFixed(2) + " F";
    }
    else {
        document.getElementById('result').textContent = "N/A (Not Applicable";
    }
}