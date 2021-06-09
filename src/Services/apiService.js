const axios = require('axios');

let base
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // dev code
  base = "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api"
} else {
  // production code
  base = "https://www.contactform.com"
}

const instance = axios.create({
    baseURL: base
  });

  module.exports = instance