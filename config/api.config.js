const BASE_URL = 'https://api.spotify.com/v1';

const TOKEN_BASE_URL = 'https://accounts.spotify.com/api';

const CLIENT_ID='a3545b01496547ab9501972955ef8b7b';
const CLIENT_SECRET='ad5e441f428b4d89ab9521f62aade247';
const REDIRECT_URI='http://localhost:8000/auth/callback';
const SCOPE='user-read-playback-state user-modify-playback-state user-read-currently-playing streaming user-follow-read user-top-read user-read-recently-played user-library-read user-read-email user-read-private';

const STATE_KEY = 'spotify_auth_state';
const MARKET = 'US';
const LOW_LIMIT = 12;
const DEFAULT_LIMIT = 28;

// Musixmatch base url for track lyrics
const MUSIXMATCH_BASE_URL = 'https://api.musixmatch.com/ws/1.1/';

// Musixmatch api key
const MUSIXMATCH_API_KEY = 'cf16a5bcb5ec48512394a185599c79b6';

module.exports = {BASE_URL, TOKEN_BASE_URL, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, SCOPE, STATE_KEY, MARKET, LOW_LIMIT, DEFAULT_LIMIT, MUSIXMATCH_BASE_URL, MUSIXMATCH_API_KEY};

