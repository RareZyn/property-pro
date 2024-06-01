import React, { useState } from "react";
import styles from "./ReplyCard.css";
import {FaCircleXmark,FaCopy } from "react-icons/fa6";

export const ReplyCard = () => {
  const [isReplying, setIsReplying] = useState(false);

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

  return (
    <div className="ReplyCard">
    
      <div className="first-div">
        <div className="profile-picture">
          <img src={require("../../Res/image/user-image.png")} alt="User" />
        </div>
        <div id="comment">
          <p id="comment-user">Ahmad</p>
          <p id="comment-reply">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
            assumenda cupiditate nam ea suscipit pariatur, est sequi, libero ut
            ipsum, quae repudiandae aliquam doloribus beatae rerum dolores
            deleniti praesentium?
          </p>
        </div>
      </div>

      <div className="reply-bottom">
      <div className="second-div">
        <p id="last-seen">2 hours</p>
        <span id="like-total">7 </span>
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
