import "./ForumPage.module.css";
import { ForumHeader } from "./ForumHeader";
import PostCard from "../../Cards/Posting Cards/PostCard";
import CreatePost from "./CreatePost";

const ForumPage = () => {


  return (
    <div className="ForumPage">
      <ForumHeader />
      <div id="ForumContent">
      <div className="CreatePostContainer"> 
      <CreatePost></CreatePost>
      </div>
      <div className="ForumContainer">
      <PostCard/>
      <PostCard></PostCard></div></div>
    </div>
  );
  // l
};

export { ForumPage };


