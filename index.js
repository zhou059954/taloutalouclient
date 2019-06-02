const express = require('express');
const bobyParser = require('body-parser');

const { mongoose } = require('./db.js');

var testcrudController = require('./controllers/testcrudController.js');
var utilisateurController = require('./controllers/utilisateurController.js');
var videosController = require('./controllers/videosController.js');
var albumsController = require('./controllers/AlbumsController.js');
var playlistController = require('./controllers/playlistsController.js');
var newplaylistController= require('./controllers/newplaylistController.js');

var app = express();
app.use(bobyParser.json());

app.listen(3000, () => console.log('Server started at port:3000'));

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append("Access-Control-Allow-Headers", "Origin, Accept,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    res.append('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/', utilisateurController);
app.use('/', testcrudController);
app.use('/', videosController);
app.use('/', albumsController);
app.use('/', playlistController);
app.use('/', newplaylistController);
app.use('/uploads/videos',express.static('uploads/videos'));
app.use('/uploads/images',express.static('uploads/images'));