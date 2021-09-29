const axios = require('axios').default;

// Make a request for a user with a given ID
axios.get('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dff15a790b3d74473adbc0e2022a8491')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });