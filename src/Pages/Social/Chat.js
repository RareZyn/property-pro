import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { MyChatBubble } from "../../Cards/Chat Cards/MyChatBubble";
import { YourChatBubble } from "../../Cards/Chat Cards/YourChatBubble";
import "./Chat.css";

export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [isChatScreenActive, setIsChatScreenActive] = useState(false);
  const [activeChatIndex, setActiveChatIndex] = useState(null);  // Track the active chat
  const chatContainerRef = useRef(null);

  const handleSend = () => {
    if (currentMessage.trim() !== '') {
      const newMessage = { type: 'my', content: currentMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), isImage: false };
      setMessages([...messages, newMessage]);
      setCurrentMessage('');
    }
  };

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

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChatListClick = (index) => {
    setIsChatScreenActive(true);
    setActiveChatIndex(index);  // Set the active chat
  };

  const handleBackToChatList = () => {
    setIsChatScreenActive(false);
  };

  return (
    <div className="Chat">
      <ul className={`ChatList ${isChatScreenActive ? 'active' : ''}`}>
        <li onClick={() => handleChatListClick(0)} className={activeChatIndex === 0 ? 'active' : ''}>
          <img src={require("../../Res/image/user profile.png")} alt="User profile"/>
          <div>
            <h1>Nama 1</h1>
            <p>Assalamualaikum</p>
          </div>
        </li>
        <CustomChatUserList userName={"Nama 2"} chatContent={"Bang, barang saya sampai dah ke?"} onClick={() => handleChatListClick(1)} isActive={activeChatIndex === 1} />
        <CustomChatUserList userName={"Nama 3"} chatContent={"Berapa?"} onClick={() => handleChatListClick(2)} isActive={activeChatIndex === 2} />
        {/* ... other list items */}
      </ul>
      <div className={`ChatScreen ${isChatScreenActive ? 'active' : ''}`}>
        <div className="ChatUser">
          <div className="ChatUser-back" onClick={handleBackToChatList}>
            <FaChevronLeft />
          </div>
          <img src={require("../../Res/image/user profile.png")} alt="User profile" />
          <h1>Nama 1</h1>
        </div>

        <div className="ChatContainer" ref={chatContainerRef}>
          <YourChatBubble />
          {messages.map((msg, index) => (
            msg.type === 'my' ? <MyChatBubble key={index} content={msg.content} time={msg.time} isImage={msg.isImage} /> : <YourChatBubble key={index} content={msg.content} />
          ))}
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
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={(e) => { if (e.key === 'Enter') handleSend(); }}
          />
          <img 
            src={require("../../Res/image/send-orange.png")} 
            alt="Send"
            onClick={handleSend}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  );
};

function CustomChatUserList({ userName, chatContent, onClick, isActive }) {
  return (
    <li onClick={onClick} className={isActive ? 'active' : ''}>
      <img src={require("../../Res/image/user profile.png")} alt="User profile" />
      <div>
        <h1>{userName}</h1>
        <p>{chatContent}</p>
      </div>
    </li>
  );
}
