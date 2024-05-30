import "./ForumPage.module.css";
import { useState } from "react";
import likeIcon from "../../Res/image/heart.png";
import likedIcon from "../../Res/image/red-heart.png";
import { ForumHeader } from "./ForumHeader";
import PostCard from "../../Cards/Posting Cards/PostCard";
import { ForumCreatePost } from "./ForumCreatePost";

const ForumPage = () => {


  return (
    <div className="ForumPage">
      <ForumHeader />
      <div id="ForumContent">
      <div className="CreatePostContainer">
      <ForumCreatePost />  
      </div>
      <div className="ForumContainer">
      <PostCard/></div></div>
    </div>
  );
  // l
};

export { ForumPage };


