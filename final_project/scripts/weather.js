const apiKey = 'ffba9a7b0676accde327d15399848e7c';
const city = 'Brigham City';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
const weatherCard = document.querySelector('#current-weather');
const weatherIcon = document.querySelector('#current-weather');



fetch(apiUrl)
    .then(response => response.json())
    .then(weatherData => {
        // Process and display weather data
        console.log("Weather Data")
        console.log(weatherData);
        displayWeatherData(weatherData)

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


// API output
const displayWeatherData = (weatherInfo) => {
    let iconCode = weatherInfo.weather[0].icon;
    //Create elements
    let iconImage = document.createElement("img")
    let card = document.createElement("section");
    let temp = document.createElement("h5");
    let cloud = document.createElement("h5");
    let high = document.createElement("h5");
    let low = document.createElement("h5");
    let humidity = document.createElement("h5");
    let sunrise = document.createElement("h5");
    let sunset = document.createElement("h5");
    //-----Set Icon-----
    displayIcon(iconCode)

    //-----Set text context-----

    //Temp
    temp.textContent = `${weatherInfo.main.temp} ºF`;

    //Clouds
    let clouds = weatherInfo.weather[0].description;
    let convertedClouds = capitalizeWords(clouds)
    cloud.textContent = `${convertedClouds}`;

    //High & Low Temps
    high.textContent = `High ${weatherInfo.main.temp_max}°`;
    low.textContent = `Low ${weatherInfo.main.temp_min}°`;

    //Humidity
    humidity.textContent = `Humidity: ${weatherInfo.main.humidity}%`;

    //Sunrise
    let sunriseTimeStamp = weatherInfo.sys.sunrise;
    let convertedSunrise = convertTimeStampToDate(sunriseTimeStamp)
    sunrise.textContent = `Sunrise ${convertedSunrise}`

    //Sunset
    let sunsetTimeStamp = weatherInfo.sys.sunset;
    let convertedSunset = convertTimeStampToDate(sunsetTimeStamp)
    sunset.textContent = `Sunset ${convertedSunset}`


    card.appendChild(temp)
    card.appendChild(cloud)
    card.appendChild(high)
    card.appendChild(low)
    card.appendChild(humidity)
    card.appendChild(sunrise)
    card.appendChild(sunset)
    // card.appendChile(sunrise)

    weatherCard.appendChild(card)
}

function convertTimeStampToDate(timestamp) {
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

function capitalizeWords(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function displayIcon(iconCode) {
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.src = iconUrl;
}