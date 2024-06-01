import React, { createContext, useState } from 'react';
import axios from 'axios';

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatRooms, setChatRooms] = useState([]);
  const [currentChatRoom, setCurrentChatRoom] = useState(null);

  const fetchChatRooms = async (userID) => {
    try {
      const response = await axios.get(`http://localhost:5000/chat/${userID}`);
      setChatRooms(response.data);
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  };

  const addMessageToRoom = async (roomID, message) => {
    try {
      const response = await axios.post(`http://localhost:5000/chat/${roomID}/send-message`, message);
      setCurrentChatRoom((prev) => ({
        ...prev,
        chats: [...prev.chats, response.data]
      }));
    } catch (error) {
      console.error('Error adding message:', error);
    }
  };

  return (
    <ChatContext.Provider value={{ chatRooms, fetchChatRooms, currentChatRoom, setCurrentChatRoom, addMessageToRoom }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;