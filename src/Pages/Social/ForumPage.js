import styles from "./ForumPage.module.css";
import { useState } from "react";
import likeIcon from "../../Res/image/heart.png";
import likedIcon from "../../Res/image/red-heart.png";
import { ForumHeader } from "./ForumHeader";
import PostCard from "../../Cards/Posting Cards/PostCard";

const ForumPage = () => {
  let postCardItems = [];
  for (let i=0;i<5;i++){
    postCardItems.push(<PostCardCommunity></PostCardCommunity>);
  }

  return (
    <>
    <ForumHeader/>
    {postCardItems}
    </>
  );
  // l
};

export {ForumPage}

const PostCardCommunity = () =>{
  return(
    <div className={styles["PostCardContainer"]}>
      <PostCard></PostCard>
    </div>
  )
}

