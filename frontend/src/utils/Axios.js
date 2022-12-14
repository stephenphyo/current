const axios = require('axios');

const api_url = process.env.REACT_APP_API_URL || "http://current.stephenphyo.com:9000";
const api = axios.create({
    baseURL: api_url,
})

module.exports = api;