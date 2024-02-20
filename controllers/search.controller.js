const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const trackApi = require('../api/track.api');
const searchApi = require('../api/search.api');
const categoryApi = require('../api/category.api');
const apiConfig = require('../config/api.config');

const search = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // several browse categories
    const severalBrowseCategories = await categoryApi.getSeveralBrowseCategories(req);
    // console.log(severalBrowseCategories);
    res.render('pages/search',{
        currentProfile,
        currentUserPlaylists,
        severalBrowseCategories,
        path: '/search'
    });
}
const searchRequest = (req, res) => {
    // console.log(req.body.query);
    res.redirect(`/search/all/${req.body.query}`);
}
const searchAll = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);
    // searchAll
    const searchAll = await searchApi.getAll(req);
    // console.log(searchAll);
    res.render('pages/search_result',{
        currentProfile,
        currentUserPlaylists,
        searchAll,
        path: '/search'
    });
}

const predictMood = (req, res) => {
    res.render('pages/predict_mood');
}
module.exports = {search, searchRequest, searchAll, predictMood};
