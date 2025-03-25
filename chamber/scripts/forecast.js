const apiForecastKey = "d862572dba4bd221df68a15e28f380a7";
const cityForecast = "Brigham City";
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityForecast}&appid=${apiForecastKey}&units=imperial`;

fetch(urlForecast)
    .then(response => response.json())
    .then(forecastData => {
        // Process the forecast data

        console.log(forecastData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

const forecastList = forecastData.list;
forecastList.forEach(forecast => {
    const dateTime = new Date(forecast.dt * 1000); // Convert timestamp to date
    const temperature = forecast.main.temp;
    const description = forecast.weather[0].description;
    console.log(`${dateTime.toLocaleString()}, Temp: ${temperature}°C, ${description}`);
});