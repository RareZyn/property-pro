const router = require('express').Router();
let { Chat, ChatRoom } = require('../models/chat.model');

router.route('/').get((req, res) => {
    ChatRoom.find()
        .then(chatRooms => res.json(chatRooms))
        .catch(err => res.status(400).json('Error: ' +err))
});

// get userID chatRoom for chatRoom list
router.route('/:userID').get((req, res) => {
    const userID = req.params.userID;
    ChatRoom.find({ user1: userID })
        .populate('user1')
        .then(chatRooms => res.json(chatRooms))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add-room').post((req, res) =>{
    const { user1, user2 } = req.body;

    // create new chat room
    const newChatRoom = ChatRoom({
        user1: user1,
        user2: user2,
        chats: []
    });

    // save to database
    newChatRoom.save()
        .then(() => res.json('Chat room added'))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/:roomID/send-message').post(async (req ,res)=>{
    try {
        const { senderID, textChat } = req.body;
    
        const newChat = new Chat({
          senderID: senderID,
          textChat: textChat
        });
    
        const savedChat = await newChat.save();
    
        const updatedRoom = await ChatRoom.findByIdAndUpdate(
          req.params.roomID,
          { $push: { chats: savedChat } },
          { new: true, useFindAndModify: false }
        );
    
        res.json(savedChat); // Send back the saved chat message
      } catch (error) {
        console.error('Error sending message:', error);
        res.status(400).json('Error sending message');
      }
});

module.exports = router;