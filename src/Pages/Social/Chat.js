import React, { useState, useRef, useEffect, useContext } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { MyChatBubble } from "../../Cards/Chat Cards/MyChatBubble";
import { YourChatBubble } from "../../Cards/Chat Cards/YourChatBubble";
import ChatContext from '../../context/ChatContext';
import "./Chat.css";
import { UserContext } from '../../context/UserContext';
import { getUser } from '../../utils/userAPI';
import { PuffLoader } from "react-spinners";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { toast } from "react-toastify";

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
  const [uploadImage, setUploadImage] = useState(null);
  const [url, setUrl] = useState("");
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  userID = user?._id;
  

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
        const newMessage = { 
          type: 'my', 
          content: e.target.result, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
          isImage: true 
        };
        setMessages([...messages, newMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleImageChange = (e) => {
  //   if (e.target.files[0]) {
  //     setUploadImage(e.target.files[0]);
  //   }
  // };

  const handleUpload = async (e) => {
    if(e.target.files[0]){
      const image = e.target.files[0];
      setUploadImage(image);
      console.log(image);
      try{
        const storageRef = firebase
            .storage()
            .ref("chats/")
            .child(`/${userID}`);
          const fileRef = storageRef.child(image.name);

          const snapshot = await fileRef.put(image);
          const downloadURL = await snapshot.ref.getDownloadURL();

          console.log(downloadURL);
          if (currentChatRoom) {
            await addMessageToRoom(currentChatRoom._id, { senderID: userID, textChat: 'image', imageUrl: downloadURL});
            setMessage('');
          } else {
            console.log('Cannot send message. Current chat room or message is invalid.');
          }
      } catch(error){
        console.error("Upload failed", error.message);
        toast.error("Image upload failed. Please try again.");
      }
    } else{
      console.log("No image upload");
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

  const renderSenderID = (room,userID) => {
    return room.user1._id === userID ? room.user2 : room.user1;
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const hours = date.getHours().toString().padStart(2, '0'); // Ensures two-digit format
    const minutes = date.getMinutes().toString().padStart(2, '0'); // Ensures two-digit format
    return `${hours}:${minutes}`;
  };

  if(isLoading){
    return (
      <div className="loaderContainer">
        <PuffLoader />
      </div>
    );
  }

  return (
    <div className="Chat">
      <ul className={`ChatList ${isChatScreenActive ? 'active' : ''}`}>

        {chatRooms.map(room => (
          <li key={room._id} onClick={() => handleChatListClick(0, room)} className={currentChatRoom === room ? 'active' : ''}>
            <img src={ renderSenderID(room,userID).profilePicture ||require("../../Res/image/user profile.png")} alt="User profile" />
            {/* <ProfilePicture imgLink={renderSenderID(room,userID).profilePicture} size='24px'/> */}
            <div>
              <h1>{renderUsername(room,userID)}</h1>
              {room.chats.length > 0 ? (
              <p>{room.chats[room.chats.length - 1].textChat}</p>
              ) : null}
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
            <img src={ renderSenderID(currentChatRoom,userID).profilePicture ||require("../../Res/image/user profile.png")} alt="User profile" />
            <h1>{
              renderUsername(currentChatRoom,userID)
            }</h1>
          </div>

          <div className="ChatContainer" ref={chatContainerRef}>
            {/* {messages.map((msg, index) => (
              msg.type === 'my' ? <MyChatBubble key={index} content={msg.content} time={msg.time} isImage={msg.isImage} /> : <YourChatBubble key={index} content={msg.content} />
            ))} */}
            {currentChatRoom.chats.length > 0 &&
            currentChatRoom.chats.map((chat) =>{
              if(chat.imageUrl){
                return(
                  chat.senderID === userID ?  
                  <MyChatBubble key={chat._id} isImage={true} content={chat.imageUrl} time={formatTime(chat.createdAt)}/> : // if true
                  <YourChatBubble key={chat._id} isImage={true} content={chat.imageUrl} /> // if false
                )
              }

             return(
                chat.senderID === userID ?  
                <MyChatBubble key={chat._id} content={chat.textChat} time={formatTime(chat.createdAt)}/> : // if true
                <YourChatBubble key={chat._id} content={chat.textChat} /> // if false
              )}
            )}
          </div>

          <div className="SendChat">
            
            <input type="file" id="SendChatSendImg" onChange={handleUpload} />
            {/* <input type="file" id="SendChatSendVid" onChange={handleImageUpload} /> */}
            <label htmlFor="SendChatSendImg" className='chat-icon'>
              <img src={require("../../Res/image/image-chat.png")} alt="Send image" />
            </label>
            {/* <label htmlFor="SendChatSendVid" className='chat-icon'>
              <img src={require("../../Res/image/video.png")} alt="Send video" />
            </label> */}
            
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
