const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const categoryApi = require('../api/category.api');
const searchApi = require('../api/search.api');
const apiConfig = require('../config/api.config');

const getPlaylist = async (req, res) => {
    
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // playlist songs
    const playlistSongs = await playlistApi.getPlaylistSongs(req, apiConfig.LOW_LIMIT);
    
    // console.log(playlistSongs);
    res.render('pages/playlist',{
        currentProfile,
        currentUserPlaylists,
        playlistSongs,
        path: ''
    });
}
module.exports = {getPlaylist};
