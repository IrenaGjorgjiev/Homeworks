const axios = require('axios');


axios.get('https://swapi.dev/api/people')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });