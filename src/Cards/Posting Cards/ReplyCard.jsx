import React, { useState } from "react";
import styles from "./ReplyCard.css";
import { FaCircleXmark, FaCopy } from "react-icons/fa6";

export const ReplyCard = () => {
  const [isReplying, setIsReplying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [submittedReply, setSubmittedReply] = useState("");

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  const handleInputChange = (event) => {
    setReplyText(event.target.value);
  };

  const handleSendClick = () => {
    setSubmittedReply(replyText);
    setReplyText("");
    setIsOpen(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendClick();
    }
  };

  return (
    <div className="ReplyCard">
    <div className="firstreply-section">
      <div className="first-div">
        <div className="profile-picture">
          <img src={require("../Res/image/user profile.png")} alt="Profile" />
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
          <button id="like-button">Like</button>
        </div>
        <button className="open-button" onClick={openForm}>Reply</button>
      </div></div>

      <div className="secondreply-section">
      <div className="first-div">
        <div className="profile-picture">
          <img src={require("../Res/image/user profile.png")} alt="Profile" />
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
          <button id="like-button">Like</button>
        </div>
        <button className="open-button" onClick={openForm}>Reply</button>
      </div></div>

      {isOpen && (
        <div className="chat-popup">
          <div className="form-container">
            <div className="reply-first-row">
              <div className="title">
                <label htmlFor="msg"><b>Reply section</b></label>
              </div>
              <button id="button-cancel" onClick={closeForm}>
                <FaCircleXmark />
              </button>
            </div>
            <textarea
              placeholder="Type your reply here"
              name="msg"
              value={replyText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              required
            ></textarea>
            <button type="submit" className="btn" onClick={handleSendClick}>
              Send
            </button>
          </div>
        </div>
      )}

      {submittedReply && (
        <div className="submitted-reply">
          <p>{submittedReply}</p>
        </div>
      )}
    </div>
  );
};

