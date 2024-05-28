const router = require('express').Router();
let { Chat, ChatRoom } = require('../models/chat.model');

router.route('/').get((req, res) => {
    ChatRoom.find()
        .then(chatRooms => res.json(chatRooms))
        .catch(err => res.status(400).json('Error: ' +err))
});

router.route('/add-room').post((req, res) =>{
    const { user1ID, user2ID } = req.body;

    // create new chat room
    const newChatRoom = ChatRoom({
        user1: user1ID,
        user2: user2ID,
        chats: []
    });

    // save to database
    newChatRoom.save()
        .then(() => res.json('Chat room added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:id/send-message').post((req ,res)=>{
    const {senderID , textChat} = req.body;

    const newChat = Chat({
        senderID: senderID,
        textChat: textChat
    });

    ChatRoom.findByIdAndUpdate(
        req.params.id,
        {$push: {chats: newChat}},
        {new: true, useFindAndModify: false}
    )
    .then(message => res.json(textChat + " send!"))
    .catch(err => res.status(400).json("Error: "+err));
});

module.exports = router;