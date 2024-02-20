const {getData, musixmatchApi} = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');

const getRecommendedTracks = async (req, trackSeed, itemLimit)=>{
    const {data: { tracks: recommendedTracks}} = await getData(`/recommendations?seed_tracks=${trackSeed}&limit=${itemLimit}`, req.cookies.access_token);
    return recommendedTracks;
}


const getUserSavedTracks = async (req, itemLimit)=>{
    const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
    const { data: userSavedTracks } = await getData(`/me/tracks?limit=${limit}&offset=${offset}`, req.cookies.access_token);
    return  { baseUrl: req.baseUrl, page, ...userSavedTracks}
}

const getTrackDetails = async (req) => {
    const { trackId } = req.params;
    const { data: trackDetails } = await getData(`/tracks/${trackId}`, req.cookies.access_token);
    return trackDetails;
}

const getLyrics = async (trackName, artistName, isrc = null) => {
    const { message: { body: { lyrics } } } = await musixmatchApi('matcher.lyrics.get?', {
        q_track: trackName.toLowerCase(),
        q_artist: artistName.toLowerCase(),
        track_isrc: isrc
    });
    return lyrics;
}
module.exports = {getRecommendedTracks, getUserSavedTracks, getTrackDetails, getLyrics};