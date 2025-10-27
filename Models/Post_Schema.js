const mongoose = require('mongoose');

const Post_Schema = new mongoose.Schema({
    Post_url: {
        type: String,
        required: true,
        trim: true
    },

    Admin_Profile: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin_Profile',
    },
}, { timestamps: true });

module.exports = mongoose.model('Post', Post_Schema);
