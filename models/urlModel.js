const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{
        date: { type: String, required: true },
        time: { type: String, required: true }
    }],
}, { timestamps: true });

const URL = mongoose.model("URL", urlSchema);

module.exports = URL;
