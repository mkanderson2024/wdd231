const apiForecastKey = "d862572dba4bd221df68a15e28f380a7";
const cityForecast = "Brigham City";
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${cityForecast}&appid=${apiForecastKey}&units=imperial`;
const forecastCard = document.querySelector('#forecast-weather');

async function getForecast(city) {
    try {
        const responce = await fetch(urlForecast)

        if (!responce.ok) {
            throw new Error(`HTTP error! status: ${responce.status}`);
        }

        const data = await responce.json();
        return data;
    } catch (error) {
        console.error('Error fetcing forecast:', error);
        throw error;
    }
}


async function main() {
    try {
        const forecastData = await getForecast(cityForecast)
        console.log("Forecast Data")
        console.log(forecastData)
        displayForecastData(forecastData);
    } catch (error) {
        console.error('Failed to get forecast:', error);
    }
}

// API output
const displayForecastData = (forecastInfo) => {
    let forecastedCard = document.createElement("section")
    let forecastDate1 = document.createElement("h5")
    let forecastDate2 = document.createElement("h5")
    let forecastDate3 = document.createElement("h5")

    let temp1 = forecastInfo.list[0].main.temp;
    let temp2 = forecastInfo.list[1].main.temp;
    let temp3 = forecastInfo.list[2].main.temp;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const dayOfWeek1 = tomorrow.getDay();
    const dayOfWeek2 = tomorrow.getDay() + 1;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let tomorrowDayName = days[dayOfWeek1];
    let twoDaysByName = days[dayOfWeek2]

    forecastDate1.textContent = `Today: ${temp1}`
    forecastDate2.textContent = `${tomorrowDayName} ${temp2}`
    forecastDate3.textContent = `${twoDaysByName} ${temp3}`

    forecastedCard.className = "threeday-forecast"
    forecastedCard.appendChild(forecastDate1)
    forecastedCard.appendChild(forecastDate2)
    forecastedCard.appendChild(forecastDate3)

    forecastCard.appendChild(forecastedCard)
};

main();