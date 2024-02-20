const userApi = require('../api/user.api');
const playerApi = require('../api/player.api');
const trackApi = require('../api/track.api');
const artistApi = require('../api/artist.api');
const albumApi = require('../api/album.api');
const playlistApi = require('../api/playlist.api');
const apiConfig = require('../config/api.config');

const home = async (req, res)=>{
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // const topArtists = await userApi.getTopArtists(req);
    // const yourTopItems = await userApi.getYourTopItems(req);
    // console.log(topArtists);
    const recentlyPlayed = await playerApi.getRecentlyPlayed(req);
    const recentlyPlayedTracks = recentlyPlayed.items.map(({track})=>track);
    // recommende albums
    const trackIds = recentlyPlayedTracks.map(({id})=>id);
    const trackSeed = trackIds.slice(0,5).join(',');
    const recommendedAlbums = await trackApi.getRecommendedTracks(req, trackSeed, apiConfig.LOW_LIMIT);
    
    // recommended artists
    const artistIdEntries = recommendedAlbums.map(track => track.artists.map(artist => artist.id));
    const uniqueArtistIds = [...new Set(artistIdEntries.flat(1))].join(',');
    const recommendedArtists = await artistApi.getSeveralDetails(req, uniqueArtistIds);

    // new release albums
    const newRelease = await albumApi.getNewRelease(req, apiConfig.LOW_LIMIT);

    // featured playlists
    const featuredPlaylist = await playlistApi.getFeatured(req, apiConfig.LOW_LIMIT);
    

    // console.log(currentUserPlaylists);
    res.render('pages/home',{
        currentProfile,
        currentUserPlaylists,
        recentlyPlayedTracks,
        recommendedAlbums,
        recommendedArtists,
        newRelease,
        featuredPlaylist,
        path: '/home'
    });
}
module.exports = {home};