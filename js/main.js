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

const weatherButton = document.getElementById('btn');
const cityName = document.getElementById('city');
const kelvinTemp = document.getElementById('kelvin');
const celciusTemp = document.getElementById('celcius');
const farenheitTemp = document.getElementById('tempF');
const currentCondition = document.getElementById('conditions');
const otherInfo = document.getElementById('icon');
const alert = document.getElementById("alert");
const notHide = document.getElementById("notHide");
const apiLink = "https://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=dff15a790b3d74473adbc0e2022a8491";


//const apiKey = 'dff15a790b3d74473adbc0e2022a8491';

let zipInput = '';

//onload to start page
//function startPage() {
//  startWeather();
//}

//get zip code from user

//event listener for click
btn.addEventListener("click", startWeather);
//make API call
function startWeather() {
    let zipInput = document.getElementById('ZipCode').value;
    // Make a request for a user with a given ID
    axios.get(apiLink.replace("90210", zipInput))

        .then(function (response) {
            // handle success
            console.log(response);
            // changing API data once it is called

            notHide.style.visibility = "visible";
            let cityAPI = response.data.name;
            let kelvinAPI = response.data.main.temp;
            let currentWeather = response.data.weather[0].main;
            cityName.innerHTML = cityAPI;
            kelvinTemp.innerHTML = kelvinAPI + 'K';
            celciusTemp.innerHTML = (Math.round(kelvinAPI - 273.15)) + 'ºC';
            tempF.innerHTML = (Math.round(1.8 * (kelvinAPI - 273) + 32)) + 'ºF';
            conditions.innerHTML = currentWeather;
            imageAdd(kelvinAPI);
        })
        .catch(function (error) {
            // handle error
            console.log(error)
            alertError(alert);
        })
        .then(function () {
            // always executed
        })
};

function imageAdd(kelvinTemp) {
    if (kelvinTemp > 297) {
        icon.src = "img/hot.jpeg"
    }
    else if (kelvinTemp > 283) {
        icon.src = "img/mild.png"
    }
    else {
        icon.src = "img/cold.jpeg"
    }
}


function alertError() {
    alert('Please Enter A Valid 5 Digit Zip Code');
}