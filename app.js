'use strict';
const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const express = require('express'),
    app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server is running on http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const parksController = require('./routes/parks');
const reviewsController = require('./routes/reviews');
const usersController = require('./routes/users');

app.use('/', rootController);
app.use('/parks', parksController);
app.use('/reviews', reviewsController);
app.use('/users', usersController);
