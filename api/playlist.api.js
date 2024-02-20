const { getData } = require('../config/axios.config');
const { getUrlQuery } = require('../utils/helpers.util');

const getFeatured = async (req, itemLimit) => {
    const {offset, limit, page } = getUrlQuery(req.params, itemLimit);
    const {data: featuredPlaylist } = await getData(`/browse/featured-playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);

    return { baseUrl: req.baseUrl, page, ...featuredPlaylist}
}

const getUserPlaylists = async (req, itemLimit)=>{
    const { offset, limit, page } = getUrlQuery(req.params, itemLimit);
    const { data: userPlaylists} = await getData(`/me/playlists?limit=${limit}&offset=${offset}`, req.cookies.access_token);
    return { baseUrl: req.baseUrl, page, ...userPlaylists}
}

const getPlaylistSongs = async (req, itemLimit) => {
    const {offset, limit, page } = getUrlQuery(req.params, itemLimit);
    const { playlistId } = req.params;
    const playlistName = req.query.name;
    const playlistImageUrl = req.query.imageUrl;
    const { data: playlistSongs } = await getData(`/playlists/${playlistId}/tracks?limit=${limit}&offset=${offset}`, req.cookies.access_token);
    return { baseUrl: req.baseUrl, page, ...playlistSongs, playlistName, playlistImageUrl}
}
module.exports = {getFeatured, getUserPlaylists, getPlaylistSongs}