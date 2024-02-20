const querystring = require('querystring');
const apiCongif = require('../config/api.config');

const generateRandomString = function (length){
    let randomString = '';
    const possibleLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for(let i=0;i<length-1;i++){
        const randomIndex = Math.floor(Math.random()*possibleLetters.length);
        randomString += possibleLetters[randomIndex];
    }
    return randomString;
}

const getUrlQuery = (params, limit = apiCongif.DEFAULT_LIMIT) => {
    const {page = 1} = params;
    const offset = (limit * page) - limit;
    return {limit, offset, page}
}

module.exports = {generateRandomString, getUrlQuery}