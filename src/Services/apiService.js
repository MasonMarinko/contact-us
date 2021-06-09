const axios = require('axios');

const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/JustUtahCoders/interview-users-api"
  });

  module.exports = instance