const mongoose = require('mongoose');
const Text = require('./app/models/Text'); // Adjust path as necessary

async function insertText() {
    try {
        // Sample data to insert
        const sampleTexts = [
            { content: 'Hello MongoDB!' },
            { content: 'Testing Mongoose' },
            { content: 'Sample text document' },
        ];

        // Insert sample texts into MongoDB
        const insertedTexts = await Text.insertMany(sampleTexts);
        console.log('Inserted texts:', insertedTexts);
    } catch (error) {
        console.error('Error inserting texts:', error.message);
    } finally {
        // Close MongoDB connection
        mongoose.connection.close();
    }
}

// Run the function to insert sample data
module.exports = { insertText };
