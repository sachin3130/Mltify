const { getData } = require('../config/axios.config');
const apiConfig = require('../config/api.config');

const getSeveralDetails = async (req, artistIds) => {
    const {data: trackArtists } = await getData(`/artists?ids=${artistIds}`, req.cookies.access_token);
    return trackArtists;
}

const getArtistDetails = async (req) => {
    const { artistId } = req.params;
    const { data: artistDetails } = await getData(`/artists/${artistId}`, req.cookies.access_token);
    return artistDetails;
}

const getArtistTopTracks = async (req) => {
    const { artistId } = req.params;
    // console.log(artistId);
    const { data: artistTopTracks } = await getData(`/artists/${artistId}/top-tracks?market=${apiConfig.MARKET}`, req.cookies.access_token);
    return artistTopTracks;
}

const getArtistTopTracks2 = async (req, firstArtistId) => {
    const { data: firstArtistTopTracks } = await getData(`/artists/${firstArtistId}/top-tracks?market=${apiConfig.MARKET}`, req.cookies.access_token);
    return firstArtistTopTracks;
}
module.exports = {getSeveralDetails, getArtistDetails, getArtistTopTracks, getArtistTopTracks2};