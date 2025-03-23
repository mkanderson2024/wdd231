const apiKey = 'ffba9a7b0676accde327d15399848e7c';
const city = 'Brigham City';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Process and display weather data
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });