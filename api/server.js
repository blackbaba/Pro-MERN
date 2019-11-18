require('dotenv').config();
const express = require('express');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

const app = express();
// app.use(express.static('public'));

installHandler(app);
const port = process.env.API_SERVER_PORT || 3000;

(async function () {
  try {
    await connectToDb();
    app.listen(port, function () {
      console.log(`API Server started on Port ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
})();