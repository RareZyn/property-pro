import styles from "./CreatePost.module.css";
import { useState,useContext,useEffect } from "react";
import { FaImages, FaVideo } from "react-icons/fa6";
import pp from "../../Res/image/user profile.png";
import UploadCard from "../../Cards/General Cards/UploadCard";
import { ForumContext } from '../../context/ForumContext';
import axios from "axios";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI.js";

export const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const { createForum,loading,setLoading } = useContext(ForumContext);
  const [newForumText, setNewForumText] = useState('');
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

  const handleCreateForum = async () => {
    try {
      await createForum({ 
        userID: userID,
        textForum: newForumText,
        comments: [],
        likes: [],
        likeCount: 0 
      });
      console.log('textForum: ',newForumText);
      setNewForumText('');
    } catch (error) {
      console.error('Error creating forum:', error);
    }
  };


  const handleImageClick = () => {
    setShowImageUpload(true);
  };

  const handleVideoClick = () => {
    setShowVideoUpload(true);
  };

  const handleFileUpload = (file) => {
    setUploadedFile(file);
  };

  return (
    <div id={styles["post-card-container"]} className="box-shadow">
      <h2 id="title-post">Create Post</h2>
        <div id={styles["text-box"]}>
          
          <textarea
            id={styles["type-text"]}
            className="textarea-style"
            rows="4"
            cols="50"
            placeholder={`What’s on your mind ${user ? user.username : ''}?`}
            value={newForumText}
            onChange={(e) => setNewForumText(e.target.value)}
          ></textarea>

        </div>
      
      <div id={styles["engagement-container"]}>
        <div className={styles["engagement-button"]} onClick={handleImageClick}>
          <FaImages />
          <span>Media</span>
        </div>
        
        <button className={styles["three"]} onClick={() => handleCreateForum()}>
          <img id={styles["button-image"]} src={require("../../Res/image/send.png")} alt="Send" />
          <p id="button-text">Publish</p>
        </button>
      </div>
      
      <div className="PopdownDiscussion">
        {showImageUpload && <UploadCard key="upload-image-card" type="Image" onFileUpload={handleFileUpload} />}
        {showVideoUpload && <UploadCard key="upload-video-card" type="Video" onFileUpload={handleFileUpload} />}
        {uploadedFile && (
          <div className={styles["UploadedFile"]}>
            <p>Uploaded File:</p>
            <img src={URL.createObjectURL(uploadedFile[0])} alt="Uploaded" />
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
