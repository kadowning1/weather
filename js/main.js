// const axios = require('axios').default;

// var state = {}

// function handleRequest(res) {
//   return res.json();
// }

// function handleJSON(json) {
//   console.log(json);

// }

//start

//establish variables

const zipCode = document.getElementById('ZipCode');
const weatherButton = document.getElementById('btn');
const cityName = document.getElementById('city');
const kelvinTemp = document.getElementById('kelvin');
const celciusTemp = document.getElementById('celcius');
const farenheitTemp = document.getElementById('farenheit');
const currentCondition = document.getElementById('conditions');
const otherInfo = document.getElementById('icon');
const alert = document.getElementById("alert");

const apiLink = "http://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=dff15a790b3d74473adbc0e2022a849";
const apiKey = 'dff15a790b3d74473adbc0e2022a8491';

let zipInput = '';

//onload to start page
function startPage() {
  startWeather();
}

//get zip code from user

function zipGo() {
  zipInput = ZipCode.value;
}
//event listener for click
btn.addEventListener("click", startWeather);
//make API call
function startWeather() {
  // Make a request for a user with a given ID
  axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40509,us&appid=dff15a790b3d74473adbc0e2022a8491')
    .then(function(response) {
      // handle success
      console.log(response);
      // changing API data once it is called
      let cityAPI = response.data.name;
      let kelvinAPI = response.data.main.temp;
      cityName.innerHTML = cityAPI;
      kelvinTemp.innerHTML = kelvinAPI + 'K';
      celciusTemp.innerHTML = (Math.round(kelvinAPI - 273.15)) + 'ºC';
      farenheitTemp.innerHTML = (Math.round(1.8 * (kelvinAPI - 273) + 32)) + 'ºF';
    })
    .catch(function(error) {
      // handle error
      console.log(error)
       alert.innerHTML = 'Please Enter A Valid 5 Digit Zip Code';
    })
    .then(function() {
      // always executed
    })
};
