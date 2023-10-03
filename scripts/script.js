const API_KEY = 'fb2819a971197342c355b5e080011cd5';
const onecallAPI = 'https://api.openweathermap.org/data/2.5/onecall?';
const geocodingAPI = 'https://api.openweathermap.org/geo/1.0/direct?q=';

const cityName = 'Dover';
const stateCode = 'NH';
const countryCode = 'US';
const geocodingData = geocodingAPI + cityName + ',' + stateCode + ',' + countryCode + '&appid=' + API_KEY;

const getLatLon = () => {
    fetch(geocodingData)
    .then(function(response) {
        response.json()
        .then(data => {
            const lat = data[0].lat;
            const lon = data[0].lon;
            getWeatherApi(lat, lon);

            console.log(data[0].lat);
            console.log(data[0].lon);
        }).catch(function(error) {
            console.log('Geocoding Response Error', error);
        });
    }).catch(function(error) {
        console.log('Geocoding Fetch Error', error);
    });
}


const getWeatherApi = (lat, lon) => {
    fetch(onecallAPI + 'lat=' + lat + '&lon=' + lon + '&appid=' + API_KEY)
    .then(response => response.json())
    .then(weatherData => {
        console.log(weatherData);
    }).catch(error => {
        console.log('Weather API Fetch Error', error);
    })
}

getLatLon();
