const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumLikeSchema = new Schema({
    userID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

const ForumLike = mongoose.model('ForumLike', forumLikeSchema);

module.exports = ForumLike;