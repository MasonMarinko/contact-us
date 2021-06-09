const apiService = require('./apiService');

const ContactService = {
    create:(data) => {
       return apiService.post("/users", data)
       .then(result => result.data)
    }   
}

module.exports = ContactService