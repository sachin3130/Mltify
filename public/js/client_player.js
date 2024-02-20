import {cookies, transferPlayback} from "./client_player.api.js";

const playerStateChange = (playerState) => {
    const { track_windpow } = playerState;
    console.log(playerState);
}

window.onSpotifyWebPlaybackSDKReady = () => {
    const volume = localStorage.getItem('volume') ?? 100;

    const player = new Spotify.Player({
        name: 'Mspot2 Web Player',
        getOAuthToken: (callback) => { callback(cookies.get('access_token')); },
        volume: volume / 100
    });

    player.addListener('ready', async ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
        localStorage.setItem('device_id', device_id);
        await transferPlayback(device_id);
    });

    player.addListener('player_state_changed', playerStateChange);

    player.connect();
}