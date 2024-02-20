const express = require('express');
const cors = require('cors');
const cookie = require('cookie');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const loginRoutes = require('./routes/login.routes');
const authRoutes = require('./routes/auth.routes');
const homeRoutes = require('./routes/home.routes');
const liked_songsRoutes = require('./routes/liked_songs.routes');
const searchRoutes = require('./routes/search.routes');
const playlistRoutes = require('./routes/playlist.routes');
const albumRoutes = require('./routes/album.routes');
const artistRoutes = require('./routes/artist.routes');
const trackRoutes = require('./routes/track.routes');
const authenticatedUser = require('./middlewares/auth_user.middleware');
const app = express();
app.use(cors());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));

// app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/login',loginRoutes);
app.use('/auth',authRoutes);
app.use('/',homeRoutes);
app.use('/liked_songs',liked_songsRoutes);
app.use('/search',searchRoutes);
app.use('/playlist',playlistRoutes);
app.use('/album',albumRoutes);
app.use('/artist',artistRoutes);
app.use('/track',trackRoutes);

// check user is authenticated
app.use(authenticatedUser);
app.listen(8000, ()=>{
    console.log('Server running at http://localhost:8000');;
});
