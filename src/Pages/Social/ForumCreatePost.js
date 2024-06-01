import "./ForumCreatePost.css";
import React, { useState, createContext } from "react";
import UploadCard from "../../Cards/General Cards/UploadCard";

export const ForumCreatePost = () => {
  
 
  const [video, setVideo] = useState(false);
 
    const [showUploadCard, setShowUploadCard] = useState(false);
  
    const uploadImage = () => {
      setShowUploadCard(prevShow => !prevShow);
      console.log("Toggled showUploadCard:", !showUploadCard);}
    

  const uploadVideo = () => {
    setVideo((prevVideo) => !prevVideo);
    const currentVideoState = !video;
    const uploadVideo = document.querySelector(".upload-container-video");
    const buttonVideo = document.querySelector(".two");
    const changeLogoColour = document.querySelector(".two >#button-image ");
    if (currentVideoState) {
      uploadVideo.style.display = "flex";
      buttonVideo.style.backgroundColor = "#F49F1F";
      buttonVideo.style.color = "white";
      changeLogoColour.src = require("../../Res/image/videoWhite.png");
    } else {
      uploadVideo.style.display = "none";
      buttonVideo.style.backgroundColor = "#fffdef";
      buttonVideo.style.color = "black";
      changeLogoColour.src = require("../../Res/image/video.png");
    }
  };
  return (
    <div className="ForumCreatePost">
      <div className="posting-box">
        <h2 id="title-post">Create Post</h2>
        <div id="text-box">
          <textarea
            id="type-text"
            rows="4"
            cols="50"
            placeholder="What’s on your mind <username>?"
          ></textarea>
        </div>
        
        <div class="upload-container-video">
          <input type="file" id="myFile" name="filename" class="input-file" />
          <label for="myFile" class="custom-file-upload">
            <img src={require("../../Res/image/upload.png")} alt="Upload" />
            <h2>Add video from files</h2>
            <h4>or drag and drop</h4>
          </label>
        </div>
        
      <div className="posting-button">
        <button className="box one" onClick={uploadImage}>
          <img
            id="button-image"
            src={require("../../Res/image/image icon.png")}
            alt="Button Icon"
          />
          <p id="button-text">Images</p>
        </button>

          <div class="vertical-line"></div>
          <button className="box two" onClick={uploadVideo}>
            <img id="button-image" src={require("../../Res/image/video.png")} />
            <p id="button-text">Video</p>
          </button>
          <button className="box three">
            <img id="button-image" src={require("../../Res/image/send.png")} />
            <p id="button-text">Publish</p>
          </button>
        </div>
        <div className={`pop-down-div ${showUploadCard ? 'show' : ''}`}>
        {showUploadCard && <UploadCard />}
      </div>
        </div></div>
   
  );
};

 
