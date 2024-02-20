const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const categoryApi = require('../api/category.api');
const searchApi = require('../api/search.api');
const albumApi = require('../api/album.api');
const apiConfig = require('../config/api.config');

const getAlbum = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // album songs
    const albumSongs = await albumApi.getAlbumSongs(req);
    // console.log(albumSongs.tracks.items);
    res.render('pages/album', {
        currentProfile,
        currentUserPlaylists,
        albumSongs,
        path: ''
    })
}
module.exports = {getAlbum}