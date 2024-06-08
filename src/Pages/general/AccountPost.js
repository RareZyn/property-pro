import "./AccountPost.css";
import PostCard from "../../Cards/Posting Cards/PostCard";
import AddPostCard from "../../Cards/Posting Cards/AddPostCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ForumContext } from "../../context/ForumContext";

export const MyAccountPost = () => {
  const { forums } = useContext(ForumContext);
  const userID = "664a05f8d67e61a2cd0ad0ac"; // Need to fix not hard coded

  let items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<PostCard />);
  }

  return (
    <div className="acc-grid-container">
      <Link to="/forum-page" id="acc-grid">
        <AddPostCard />
      </Link>

      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {forums
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(forum => {
            console.log('User ID: ',userID);
            return(
            <li key={forum._id}>
              <PostCard name={forum.userID.username} textForum={forum.textForum} forumID={forum._id} />
            </li>
            )
          })}
      </ul>

      {/* {items} */}
    </div>
  );
};
