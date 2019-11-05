console.log("Hello World");

const express = require('express');
const fileServerMiddleware = express.static('public');

app.use('/', fileServerMiddleware);