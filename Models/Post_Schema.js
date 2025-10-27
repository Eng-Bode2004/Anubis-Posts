const mongoose = require('mongoose');

const Post_Schema = new mongoose.Schema({
    Post_url: {
        type: String,
        required: true,
        trim: true
    },

}, { timestamps: true });

module.exports = mongoose.model('Post', Post_Schema);
