require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

// Routes
const route = require('./routes');

// Database
const db = require('./config/db');
const port = process.env.PORT;

//connect to Database
db.connect();
// test.insertText();

app.use(morgan('combined'));

// Set up session middleware
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,
        genid: (req) => {
            // Implement your logic to generate a new session ID
            // This function can access req object and customize the ID
            return 'custom_session_id';
        },
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 1800000, // Set session to expire after 30 minutes
        },
    }),
);
// Apply CORS middleware before session and routes
app.use(
    cors({
        origin: true,
        credentials: true,
        optionsSuccessStatus: 200,
    }),
);
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(cookieParser());

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
