const axios = require('axios');

const ContactService = {
    create:(data) => {
       return axios.post("http://localhost:4500/api/users", data)
       .then(result => result.data)
    }   
}

module.exports = ContactService