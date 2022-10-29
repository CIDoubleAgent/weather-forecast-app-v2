const API_KEY = 'fb2819a971197342c355b5e080011cd5';
const onecallAPI = 'https://api.openweathermap.org/data/2.5/onecall?';
const geocodingAPI = 'https://api.openweathermap.org/geo/1.0/direct?q=';

const cityName = 'Dover';
const stateCode = 'NH';
const countryCode = 'US';

const getLatLon = () => {
    fetch(geocodingAPI + cityName + ',' + stateCode + ',' + countryCode + '&appid=' + API_KEY)
    .then(function(response) {
        response.json()
        .then(data => {
            console.log(data[0].lat);
            console.log(data[0].lon);
        });
    }).catch(function(error) {
        console.log('Fetch Error', error);
    });
}

getLatLon();

const getWeatherApi = () => {
    fetch(onecallAPI + 'lat=' + lat + '&lon' + lon + '&appid=' + API_KEY);
}