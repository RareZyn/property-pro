import "./AccountPost.css";
import PostCard from "../../Cards/Posting Cards/PostCard";
import { useContext,useEffect,useState } from "react";
import { ForumContext } from "../../context/ForumContext";
import { getUser } from "../../utils/userAPI.js";
import { UserContext } from "../../context/UserContext";
import CreatePost from "../../Cards/Posting Cards/CreatePost.js";

export const MyAccountPost = () => {
  const { forums,fetchForums,setLoading } = useContext(ForumContext);
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  const userID = user?._id;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetch Forums");
      try {
        await fetchForums();
      } catch (error) {
        console.error('Error fetching forums:', error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);  

  return (
    <div className="acc-grid-container">
      <CreatePost />
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {forums
        .filter(forum => forum.userID._id === userID)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map(forum => {
            console.log('user?', forum.userID)
            return(
            <li key={forum._id}>
              <PostCard forumObj={forum} name={forum.userID.username} textForum={forum.textForum} forumID={forum._id} profilePicture={forum.userID.profilePicture}/>
            </li>
            )
          })}
      </ul>
    </div>
  );
};
