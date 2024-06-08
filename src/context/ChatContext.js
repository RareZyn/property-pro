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

  const createRoom = async (currentUserID, chatUserID) => {
    try{
      const existingRoomResponse = await axios.get('http://localhost:5000/chat/check-room', {
        params: {
          user1: currentUserID,
          user2: chatUserID
        }
      });

      const existingRoom = existingRoomResponse.data;

      if (existingRoom) {
        console.log('Chat room already exists:', existingRoom);
        fetchChatRooms(currentUserID);
      } else {
        // If no existing chat room, create a new one
        const chatRoom = {
          user1: currentUserID,
          user2: chatUserID,
          chats: []
        };
        const response = await axios.post('http://localhost:5000/chat/add-room', chatRoom);
        fetchChatRooms(currentUserID);
      }
    } catch (error) {
      console.error("Error creating room: ",error);
    }
  }

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