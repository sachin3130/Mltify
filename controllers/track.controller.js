const userApi = require('../api/user.api');
const playlistApi = require('../api/playlist.api');
const categoryApi = require('../api/category.api');
const searchApi = require('../api/search.api');
const artistApi = require('../api/artist.api');
const albumApi = require('../api/album.api');
const trackApi = require('../api/track.api');
const apiConfig = require('../config/api.config');

const getTrack = async (req, res) => {
    // current user profile
    const currentProfile = await userApi.getProfile(req);

    // current user playlists
    const currentUserPlaylists = await playlistApi.getUserPlaylists(req);

    // track details
    const trackDetails = await trackApi.getTrackDetails(req);

    // artist Ids and Names
    const artistIds = trackDetails.artists.map(({id}) => id);
    const artistNames = trackDetails.artists.map(({name}) => name);

    // first artist top tracks
    const [firstArtistId] = artistIds;
    const [firstArtistName] = artistNames;
    const artistTopTracks = await artistApi.getArtistTopTracks2(req, firstArtistId);

    // track lyrics
    const { name, artists, external_ids: { isrc } } = trackDetails;
    const trackLyrics = await trackApi.getLyrics(name, artists[0].name, isrc);
    // console.log(trackLyrics);
    res.render('pages/track', {
        currentProfile,
        currentUserPlaylists,
        trackDetails,
        firstArtistName,
        artistTopTracks,
        trackLyrics,
        path: ''
    })
}
module.exports = {getTrack}