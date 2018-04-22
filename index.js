require('dotenv').config();

const express = require('express');
const pug = require('pug');

const app = express();

// Dist
app.use(process.env.DIST_DIR, express.static('dist'));
app.use('/favicon.ico', express.static('dist/favicon.ico'));

// Engine Setup
app.set('view engine', 'pug');

// Routes
app.use('/', require('./routes/index'));

// Server
app.listen(process.env.PORT);
console.log(`Running on ${process.env.PORT}`);