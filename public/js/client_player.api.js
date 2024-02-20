const cookies = new Map(document.cookie.split('; ').map(item => item.split('=')));
const BASE_URL = 'https://api.spotify.com/v1';
const headers = {
    'Authorization': `Bearer ${cookies.get('access_token')}`,
    'Content-Type': 'application/json'
}

const transferPlayback = async (deviceId, play = false) => {
    try {
        const reqBody = { device_ids: [deviceId], play }
        await fetch(`${BASE_URL}/me/player`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(reqBody)
        });
    } catch (error) {
        console.log(error);
    }
}

export {
    cookies, 
    transferPlayback
}