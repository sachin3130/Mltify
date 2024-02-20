const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const trackApi = require('../api/track.api');
const apiConfig = require('../config/api.config');

const liked_songs = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // user saved tracks
    const userSavedTracks = await trackApi.getUserSavedTracks(req, apiConfig.LOW_LIMIT);
    // console.log(userSavedTracks.items);
    res.render('pages/liked_songs',{
        currentProfile,
        currentUserPlaylists,
        userSavedTracks,
        path: '/liked_songs'
    });
}
module.exports = {liked_songs};
