## Start

User opens page
User inputs zip
User clicks get weather
Weather is populated through API

Fetch API
Create variables on HTML
    1. City Name
    2. Temperature
    3. Conditions
Create on event listener for Zip Code
Populate variables after zip code is entered
Create error if not a recognizeable Zip Code

---

#### Notes from Psuedocode Session

Needs to include:
1. City
2. Temp
    - Kelvin
    - Celcius
    - Farenheit
3. Condition
4. Other Info - Image

Requirements:
1. Allow the user to enter their location (zip code is probably easiest) and press a button to load the weather.
2. Run an onClick or onSubmit that executes an Axios GET request to retrieve weather data from the API.
3. If the request is successful, display the following in a 'mobile app' format:
City name
Current weather conditions
Current temperature in Kelvin, Fahrenheit, and Celsius
4. A unique image, decided by the current temperature (The API has icons built-in, be sure to read the docs)
5. If the request is unsuccessful, display a specific error message such as "Invalid Zip Code" or anything else that might come back from the API.
6. Allow the user to continue entering new zip codes to get new weather data.

Bootstrap - One column with multiple rows

Condition rendering - based off of state

* Need to use the axios call

1.  go to url - html page - onload - initialize
    - set variables - state
    - binding of click handlers/ events/ onEnter Key
    - give input element auto focus
    - take zip info and make axios call with the api key
    - have we set everything up that we need?

2. Start

let weatherState = {}
.currentZip = ""
.previousZip = []
.errorMsg = ""
"Test Cases" - test errorMsg

3. Submit - Call API

4.  Helper Functions
    - Make sure data is valid
    - Call API
    - Parse API information - Parse into weather
    - On state change 
        - Update API/Weather data

---

### Psuedocode