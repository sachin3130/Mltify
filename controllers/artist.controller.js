const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const categoryApi = require('../api/category.api');
const searchApi = require('../api/search.api');
const albumApi = require('../api/album.api');
const artistApi = require('../api/artist.api');
const apiConfig = require('../config/api.config');

const getArtist = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // artist details
    const artistDetails = await artistApi.getArtistDetails(req);

    // artist top tracks
    const artistTopTracks = await artistApi.getArtistTopTracks(req);
    // console.log(artistDetails);
    res.render('pages/artist', {
        currentProfile,
        currentUserPlaylists,
        artistDetails,
        artistTopTracks,
        path: ''
    })
}
module.exports = {getArtist}