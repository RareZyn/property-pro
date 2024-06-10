import React, { useEffect, useState } from "react";
import styles from "./ReplyCard.css";
import {FaCircleXmark,FaCopy } from "react-icons/fa6";
import axios from "axios";

export const ReplyCard = ({ commentObj }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [ username,setUsername ] = useState('');

  useEffect(() =>{
    const getUsername = async () =>{
      setLoading(true);
      try{
        const response = await axios.get(`http://localhost:5000/users/get/${commentObj.userID}`);
        setUsername(response.data.username);
      } catch(error){
        console.error('Error get username from userID {ReplyCard}:',error);
      } finally{
        setLoading(false);
      }
    };

    getUsername(commentObj);

  },[commentObj.userID]);

  const handleReplyClick = () => {
    setIsReplying(true);
  };

  const handleSendClick = () => {
    // Handle send functionality here
    setIsReplying(false);
  };
    const [isOpen, setIsOpen] = useState(false);
  
    const openForm = () => {
      setIsOpen(true);
    };
  
    const closeForm = () => {
      setIsOpen(false);
    };

  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className="ReplyCard">
    
      <div className="first-div">
        <div className="profile-picture">
          <img src={require("../../Res/image/user-image.png")} alt="User" />
        </div>
        <div id="comment">
          <p id="comment-user">{username}</p>
          <p id="comment-reply">
            {commentObj.textForum}
          </p>
        </div>
      </div>

      <div className="reply-bottom">
      <div className="second-div">
        <p id="last-seen">2 hours</p>
        <span id="like-total">{commentObj.likeCount} </span>
        <button id="like-button">Like</button></div>
        <button className="open-button" onClick={openForm}>Reply</button>
      </div>
     
      {isOpen && (
        <div className="chat-popup">
          <div className="form-container">
          <div className="reply-first-row">

          <div className="title">
            <label htmlFor="msg"><b>Reply section</b></label> </div>
            <button id="button-cancel" 
            onClick={closeForm}><FaCircleXmark></FaCircleXmark></button>
            </div>

            <textarea placeholder="Type your reply here" name="msg" required></textarea>

            <button type="submit" className="btn">Send</button>
            
          </div>
        </div>
      )}

    </div>
  );
};
