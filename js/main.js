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
let errorAlert = document.getElementById("hopeForError");
const notHide = document.getElementById("notHide");
const apiLink = "https://api.openweathermap.org/data/2.5/weather?zip=90210,us&appid=225e9979cafa7faa49ef4c637d23e637";
var enterButton = document.getElementById("ZipCode");


//const apiKey = 'dff15a790b3d74473adbc0e2022a8491';

let zipInput = '';


//onload to start page
//function startPage() {
//  startWeather();
//}

//get zip code from user

//event listener for click
btn.addEventListener("click", startWeather);

// Get the input field

// Execute a function when the user releases a key on the keyboard
enterButton.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    btn.click();
  }
});

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
            errorAlert.style.visibility = "hidden";
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
            console.log(error);
            
           errorAlert.style.visibility = "visible";

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


//function alertError() {
    /* //if (Number.isInteger(zipInput). && zipInput
    const errorMessage = document.getElementById('hopeForError');
    errorMessage.innerHTML = "";
    let figureItOut = document.getElementById("ZipCode").value;
    notHide.style.visibility = "hidden";
    //alert('Please Enter A Valid 5 Digit Zip Code');
    try {
        startWeather();
        if (isNaN(figureItOut)) throw "not a number";
    } catch (error) {
        errorMessage.innerHTML = "Input is " + err;
    } */
     //document.getElementById('hopeForError').style.display = 'block';
    //document.getElementById('hopeForError').innerHTML = 'Please Enter A Valid 5 Digit Zip Code';
    //document.getElementById('notHide').style.display = 'none';
