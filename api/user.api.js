const {getData} = require('../config/axios.config');

const getProfile = async(req)=>{
    const {data: currentProfile} = await getData('/me', req.cookies.access_token);
    // console.log(currentProfile);
    return currentProfile;
}
const getTopArtists = async(req)=>{
    const {data: topArtists} = await getData('/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C57dN52uHvrHOxijzpIgu3E%2C1vCWHaC5f2uS3yhpwWbIA6', req.cookies.access_token);
    // console.log(topArtists);
    
    return topArtists.artists;
}

const getYourTopItems = async(req)=>{
    const {data: yourTopItems} = await getData('/me/top/artists', req.cookies.access_token);
    // console.log(yourTopItems);
    return yourTopItems.items;
}

module.exports = {getProfile, getTopArtists, getYourTopItems};