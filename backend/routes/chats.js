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
    ChatRoom.find({ $or: [{ user1: userID }, { user2: userID }] })
        .populate('user1')
        .populate('user2')
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

// Check if room with user1 and user2 exist
router.route('/check-room/:user1/:user2').get(async (req,res)=>{
  const { user1, user2 } = req.params;

  try{
    const chatRoom = await ChatRoom.findOne({
      $or: [
        { user1: user1, user2: user2 },
        { user1: user2, user2: user1 }
      ]
    });

    res.json(chatRoom)
  } catch (error){
    console.error("Error checking chat room: ", error);
    res.status(500).send("Internal server error");
  }
});

module.exports = router;