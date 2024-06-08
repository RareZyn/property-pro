import "./AccountPost.css";
import PostCard from "../../Cards/Posting Cards/PostCard";
import AddPostCard from "../../Cards/Posting Cards/AddPostCard";
import { Link } from "react-router-dom";

export const MyAccountPost = () => {

  return (
    <div className="acc-grid-container">
      <Link to="/forum-page" id="acc-grid">
        <AddPostCard />
      </Link>
    </div>
  );
};
