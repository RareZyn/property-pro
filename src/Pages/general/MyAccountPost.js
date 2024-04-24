import "./MyAccountPost.css";
import PostCard from "../../Cards/Posting Cards/PostCard";
import AddPostCard from "../../Cards/Posting Cards/AddPostCard";
import { Link } from "react-router-dom";

export const MyAccountPost = () => {
  let items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<PostCard />);
  }

  return (
    <div className="acc-grid-container">
      <Link to="/forum-page" id="acc-grid">
        <AddPostCard />
      </Link>
      {items}
    </div>
  );
};
