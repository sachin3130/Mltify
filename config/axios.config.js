const axios = require('axios');
const querystring = require('querystring');
const apiCongif = require('./api.config');

// axios instance for access token and refresh token request

const token = axios.create({
    baseURL: apiCongif.TOKEN_BASE_URL,
    headers: {
        'Authorization': `Basic ${(Buffer.from(apiCongif.CLIENT_ID + ':' + apiCongif.CLIENT_SECRET).toString('base64'))}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

const api = axios.create({baseURL: apiCongif.BASE_URL});

const getData = async(apiUrl, access_token) =>{
    try{
        const response = await api.get(apiUrl, {
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        return response;
    }
    catch(err){
        console.log(err);
    }
}

const musixmatch = axios.create({ baseURL: apiCongif.MUSIXMATCH_BASE_URL });

const musixmatchApi = async (endpoint, parameters) => {
    try{
        const apiUrl = `${endpoint}${querystring.stringify(parameters)}&apikey=${apiCongif.MUSIXMATCH_API_KEY}`;
        const response = await musixmatch.get(apiUrl);
        return response.data;
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {token, getData, musixmatchApi};