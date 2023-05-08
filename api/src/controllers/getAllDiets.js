const axios = require('axios');
require('dotenv').config();
const { URL_API, API_KEY } = process.env;
const { Diet } = require('../db');




module.exports = async (name) => {
    if(name) {
        const diets = await axios.get('')
    }
} 
