import "./ForumPage.module.css";
import { ForumHeader } from "./ForumHeader";
import PostCard from "../../Cards/Posting Cards/PostCard";
import CreatePost from "../../Cards/Posting Cards/CreatePost";
import { useContext,useState,useEffect } from "react";
import { ForumContext } from "../../context/ForumContext";

const ForumPage = () => {
  const { forums,fetchForums,loading,setLoading } = useContext(ForumContext);
  const [searchResults, setSearchResults] = useState([]);

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

  const displayedForums = searchResults.length > 0 ? searchResults : forums;

  if (loading ) {
    return (
      <div className="ForumPage">
      <ForumHeader setSearchResults={setSearchResults}/>
        <div id="ForumContent">
          <div className="CreatePostContainer"> 
            <CreatePost></CreatePost>
          </div>
        </div>
        <div>Loading...</div> {/* Display a loading message or spinner*/}
      </div>
    );
  }

  return (
    <div className="ForumPage">
      <ForumHeader setSearchResults={setSearchResults}/>
      <div id="ForumContent">
        <div className="CreatePostContainer"> 
          <CreatePost></CreatePost>
        </div>
        <div className="ForumContainer">
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>

            {displayedForums
            .filter(forum => !forum.isComment)
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(forum => {

              return(
                <li key={forum._id}>
                  <PostCard forumObj={forum} name={forum.userID.username} textForum={forum.textForum} forumID={forum._id} profilePicture={forum.userID.profilePicture}/>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  );
  // l
};

export { ForumPage };


