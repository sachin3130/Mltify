const apiCongif = require('../config/api.config');
const axiosConfig = require('../config/axios.config');
const getToken = async function (code) {
    try{
        const response = await axiosConfig.token.post('/token',{
            grant_type: 'authorization_code',
            code,
            redirect_uri: apiCongif.REDIRECT_URI
        });
        return response;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {getToken};