function populateDates() {
    const dateSelect = document.getElementById('date');
    const currentDate = new Date();

    for (let i = 0; i <= 16; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);

        const option = document.createElement('option');
        option.value = formatDate(date);
        option.text = formatDate(date, 'long');

        dateSelect.add(option);
    }
}

function formatDate(date, format) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return format === 'long' ? date.toLocaleDateString(undefined, options) : date.toISOString().split('T')[0];
}

window.onload = function() {
    populateDates();
};

function getWeather() {
    const apiKey = '0c1b7cc9047ee12fd370470e084c696b';
    const city = document.getElementById('city').value;
    const date = document.getElementById('date').value;
    const unit = document.getElementById('unit').value;

    if (!city || !date) {
        alert('Please select a city and a date');
        return;
    }

    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;

    fetch(currentWeatherUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');

    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = `<p>${data.message}</p>`;
    } else {
        const cityName = data.name;
        const temperature = Math.round(data.main.temp); 
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;

        const temperatureHTML = `<p>${temperature}°${unit === 'metric' ? 'C' : 'F'}</p>`;
        const weatherHtml = `<p>${cityName}</p><p>${description}</p>`;

        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();
    }
}

function showImage() {
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block'; // Make the image visible
}
