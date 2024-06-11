const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
    senderID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    textChat: {
        type: String,
        minlength: 1,
        trim: true,
        required: true
    },
    imageUrl: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const chatRoomSchema = new Schema({
    user1: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user2: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chats: [chatSchema]
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);
const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = {
    Chat,
    ChatRoom
};
// to add
// gambar & video (boleh add dalam chatSchema)

/*
{
    "user1": "",
    "user2": "",
    "chats": []
}

{
    "senderID": "",
    "textChat": ""
}
*/