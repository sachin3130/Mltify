const querystring = require('querystring');
const apiCongif = require('../config/api.config');
const utils = require('../utils/helpers.util');
const {getToken} = require('../api/auth.api');
const auth = (req, res)=> {
    const state = utils.generateRandomString(16);
    res.cookie(apiCongif.STATE_KEY, state);
    res.redirect('https://accounts.spotify.com/authorize?'+
    querystring.stringify({
        response_type: 'code',
        client_id: apiCongif.CLIENT_ID,
        scope: apiCongif.SCOPE,
        redirect_uri: apiCongif.REDIRECT_URI,
        state: state
      }));
}
const callback = async (req, res)=> {
    const MILLISECONDS = 1000;
    const ONE_WEEK = 604800000;
    const {
        code=null,
        state=null,
        error=null
    } = req.query;
    const storedState = req.cookies[apiCongif.STATE_KEY];
    if(error || !state || state !==storedState){
        return res.redirect('/login');
    }
    else{
        res.clearCookie(apiCongif.STATE_KEY);
        const response = await getToken(code);
        if(response.status === 200) {
            // console.log(response.data);
            const {
                access_token, 
                refresh_token, 
                expires_in
            } = response.data;
            res.cookie('access_token', access_token, {maxAge: expires_in*MILLISECONDS});
            res.cookie('refresh_token', refresh_token, {maxAge: ONE_WEEK});
            res.redirect('/');
        }
        else{
            res.redirect('/login');
        }
    }
}
module.exports = {auth, callback};