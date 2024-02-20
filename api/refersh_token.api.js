const axiosConfig = require('../config/axios.config');
const getRefreshToken = async (refreshToken) => {
    try {
        const response = await axiosConfig.token.post('/token', {
            grant_type: 'refresh_token',
            refersh_token: refreshToken
        });
        return response;
    }
    catch(err){
        console.log(err);
    }
}
module.exports = {getRefreshToken};