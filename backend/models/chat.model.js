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
    }
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;