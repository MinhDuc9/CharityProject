require('dotenv').config();
const mongoose = require('mongoose');

async function connect() {
    const uri = process.env.DB_URL;
    try {
        await mongoose.connect(uri);
        console.log('Connected successfully!');
    } catch (e) {
        console.error('Connection failed:', e.message);
    }
}

module.exports = { connect };
