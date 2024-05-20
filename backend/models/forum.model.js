const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    userID: {
        type: String,
        required: [true, 'userID is required'],
        unique: true,
        trim: true
    },
    textForum: {
        type: String,
        required: [true, 'Text forum is required'],
        trim: true,
        minglength: [1, 'Please enter at least 1 character']
    },
    comments: [this],
    likes: [forumLikeSchema],
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