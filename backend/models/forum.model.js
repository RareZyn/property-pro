const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ForumLike = require('./forum-like.model')

const forumSchema = new Schema({
    userID: {
        type: String,
        required: [true, 'userID is required'],
        trim: true
    },
    textForum: {
        type: String,
        required: [true, 'Text forum is required'],
        trim: true,
        minglength: [1, 'Please enter at least 1 character']
    },
    comments: [this],
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'ForumLike'
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    photoUrl: {
        type: String,
        trim: true
    },
    videoUrl: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Forum = mongoose.model('Forum', forumSchema);

module.exports = Forum;