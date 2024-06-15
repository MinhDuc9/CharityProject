const mongoose = require('mongoose');

const textSchema = new mongoose.Schema({
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Text = mongoose.model('Text', textSchema);

module.exports = Text;
