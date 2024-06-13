require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Database
const db = require('./config/db');
const port = process.env.PORT;
const test = require('./insertText');

//connect to Database
db.connect();
test.insertText();

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
