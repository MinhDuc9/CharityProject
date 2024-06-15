const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Admin = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Admin', Admin);
