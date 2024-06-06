const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'userID is required'],
    },
    textForum: {
        type: String,
        required: [true, 'Text forum is required'],
        trim: true,
        minlength: [1, 'Please enter at least 1 character']
    },
    comments: [this],
    likes: [{
        type: String,
        required: [true, 'userID is required'],
        trim: true
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

/*
{
    "userID": "",
    "textForum": "",
    "comments": [],
    "likes": [],
    "likeCount": 0,
    "photoUrl": "",
    "videoUrl": ""
}
*/