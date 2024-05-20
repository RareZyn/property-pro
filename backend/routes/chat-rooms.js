const router = require('express').Router();
let ChatRoom = require('../models/chat-room.model');

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
    const {userID , message} = req.body;

    const newMessage = Message({
        senderID: userID,
        textChat: message
    });

    ChatRoom.findByIdAndUpdate(
        req.params.id,
        {$push: {chats: newMessage}},
        {new: true, useFindAndModify: false}
    )
    .then(message => res.json(message + " send!"))
    .catch(err => res.status(400).json("Error: "+err));
});

module.exports = router;