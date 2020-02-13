const express = require('express');
const morgan = require('morgan');

var bodyParser = require('body-parser');

const app = express();
const json = require('./data.json')

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).type('.html').end();
});

app.get('/data', (req, res) => {
    res.send(json);
});
// add your routes and middleware below

// finally export the express application
module.exports = app;
