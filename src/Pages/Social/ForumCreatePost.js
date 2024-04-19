import "./ForumCreatePost.css";
import React, { useState, createContext } from "react";

export const ForumCreatePost = () => {
  return (
    <div className="ForumCreatePost">
      <div className="posting-box">
        <h2 id="title-post">Create Post</h2>
        <div id="text-box">
          <textarea id="type-text" rows="4" cols="50"></textarea>
        </div>
        <div className="posting-button">
          <button className="box one">
            <img
              id="button-image"
              src={require("../../Res/image/image icon.png")}
            />
            <p id="button-text">Likes</p>
          </button>
          <div class="vertical-line"></div>
          <button className="box two">
            <img id="button-image" src={require("../../Res/image/video.png")} />
            <p id="button-text">Video</p>
          </button>
          <button className="box three">
            <img id="button-image" src={require("../../Res/image/send.png")} />
            <p id="button-text">Publish</p>
          </button>
        </div>
      </div>
    </div>
  );
};
