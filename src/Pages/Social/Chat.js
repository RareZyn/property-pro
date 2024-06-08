import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { MyChatBubble } from "../../Cards/Chat Cards/MyChatBubble";
import { YourChatBubble } from "../../Cards/Chat Cards/YourChatBubble";
import ChatContext from '../../context/ChatContext';
import "./Chat.css";

export const Chat = ({userID}) => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChatScreenActive, setIsChatScreenActive] = useState(false);
  const [activeChatIndex, setActiveChatIndex] = useState(null);  // Track the active chat
  const chatContainerRef = useRef(null);
  const { chatRooms, fetchChatRooms, setCurrentChatRoom } = useContext(ChatContext);
  const { currentChatRoom, addMessageToRoom } = useContext(ChatContext);
  const [message, setMessage] = useState('');
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  userID = "664a05f8d67e61a2cd0ad0ac"// must be change to not Hard coded

  useEffect(() => {
    fetchChatRooms(userID);// id must be userID
    console.log("fetchChatRoom");
  }, [userID]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetchChatRooms(userID);
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [currentChatRoom, userID]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        await fetchChatRooms(userID); // Assuming this fetches chat rooms for the user
      } catch (error) {
        console.error('Error fetching chat rooms:', error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
    if (!isLoading && currentChatRoom && currentChatRoom.chats) {
      setChats([...currentChatRoom.chats]);
    }
  }, [isLoading, currentChatRoom]);

  const handleSendMessage = async (senderID) => {
    console.log('currentChatRoom:', currentChatRoom);
    console.log('message:', message);
    try {
      if (currentChatRoom && message.trim()) {
        await addMessageToRoom(currentChatRoom._id, { senderID: senderID, textChat: message });
        setMessage('');
      } else {
        console.log('Cannot send message. Current chat room or message is invalid.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  // NOT USE
  // const handleSend = () => {
  //   if (currentMessage.trim() !== '') {
  //     const newMessage = { type: 'my', content: currentMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isImage: false };
  //     setMessages([...messages, newMessage]);
  //     setCurrentMessage('');
  //   }
  // };


  // TO BE HANDLE LATER
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newMessage = { type: 'my', content: e.target.result, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isImage: true };
        setMessages([...messages, newMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  // NOT USE
  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  //   }
  // }, [messages]);

  const handleChatListClick = async (index, room) => {
    setCurrentChatRoom(room);
    setIsChatScreenActive(true);
    setActiveChatIndex(index);  // Set the active chat

    try {
      await fetchChatRooms(userID);
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  };

  const handleBackToChatList = () => {
    setCurrentChatRoom(null);
    setIsChatScreenActive(false);
  };

  const renderUsername = (room, userID) => {
    return room.user1._id === userID ? room.user2.username : room.user1.username;
  };

  return (
    <div className="Chat">

      <ul className={`ChatList ${isChatScreenActive ? 'active' : ''}`}>

        {chatRooms.map(room => (
          <li key={room._id} onClick={() => handleChatListClick(0, room)} className={currentChatRoom === room ? 'active' : ''}>
            <img src={require("../../Res/image/user profile.png")} alt="User profile" />
            <div>
              <h1>{renderUsername(room,userID)}</h1>
              <p>{room.chats[room.chats.length - 1].textChat}</p>
            </div>
          </li>
        ))}

        {/* <li onClick={() => handleChatListClick(0)} className={activeChatIndex === 0 ? 'active' : ''}>
          <img src={require("../../Res/image/user profile.png")} alt="User profile"/>
          <div>
            <h1>Nama 1</h1>
            <p>Assalamualaikum</p>
          </div>
        </li>

        <CustomChatUserList userName={"Nama 2"} chatContent={"Bang, barang saya sampai dah ke?"} onClick={() => handleChatListClick(1)} isActive={activeChatIndex === 1} />
        <CustomChatUserList userName={"Nama 3"} chatContent={"Berapa?"} onClick={() => handleChatListClick(2)} isActive={activeChatIndex === 2} /> */}
        {/* ... other list items */}

      </ul>

      {/* {currentChatRoom && (
        <div>
          <h2>Chat Room</h2>
          <div>
            {chats.map(chat => (
              <div key={chat._id}>
                <strong>{chat.senderID}</strong>: {chat.textChat}
              </div>
            ))}
          </div>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={() => handleSendMessage("664a05f8d67e61a2cd0ad0ac")}>Send</button>
        </div>
      )} */}

      {currentChatRoom && (
        <div className={`ChatScreen ${isChatScreenActive ? 'active' : ''}`}>
          <div className="ChatUser">
            <div className="ChatUser-back" onClick={handleBackToChatList}>
              <FaChevronLeft />
            </div>
            <img src={require("../../Res/image/user profile.png")} alt="User profile" />
            <h1>{
              renderUsername(currentChatRoom,userID)
            }</h1>
          </div>

          <div className="ChatContainer" ref={chatContainerRef}>
            <YourChatBubble />
            {/* {messages.map((msg, index) => (
              msg.type === 'my' ? <MyChatBubble key={index} content={msg.content} time={msg.time} isImage={msg.isImage} /> : <YourChatBubble key={index} content={msg.content} />
            ))} */}
            {currentChatRoom.chats.map((chat) =>{
              console.log('Sender ID:', chat.senderID);
              console.log('Current User ID:', currentChatRoom.user1._id);
             return(
                chat.senderID === userID ?  
                <MyChatBubble key={chat._id} content={chat.textChat} time={chat.createdAt}/> : // if true
                <YourChatBubble key={chat._id} content={chat.textChat} /> // if false
              )}
            )}
          </div>

          <div className="SendChat">
            
            <input type="file" id="SendChatSendImg" onChange={handleImageUpload} />
            <input type="file" id="SendChatSendVid" onChange={handleImageUpload} />
            <label htmlFor="SendChatSendImg">
              <img src={require("../../Res/image/image-chat.png")} alt="Send image" />
            </label>
            <label htmlFor="SendChatSendVid">
              <img src={require("../../Res/image/video.png")} alt="Send video" />
            </label>
            
            <input 
              type="text" 
              className="ChatInput" 
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => { if (e.key === 'Enter') handleSendMessage(userID); }}
            />
            <img
            src={require("../../Res/image/send-orange.png")} 
            alt="Send"
            onClick={() => handleSendMessage(userID)}
            style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// function CustomChatUserList({ userName, chatContent, onClick, isActive }) {

//   return (
//     <li onClick={onClick} className={isActive ? 'active' : ''}>
//       <img src={require("../../Res/image/user profile.png")} alt="User profile" />
//       <div>
//         <h1>{userName}</h1>
//         <p>{chatContent}</p>
//       </div>
//     </li>
//   );
// }
