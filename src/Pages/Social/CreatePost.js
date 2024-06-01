import styles from "./CreatePost.module.css";
import { useState } from "react";
import { FaImages, FaVideo } from "react-icons/fa6";
import pp from "../../Res/image/user profile.png";
import UploadCard from "../../Cards/General Cards/UploadCard";

export const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [showVideoUpload, setShowVideoUpload] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

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
            placeholder="What’s on your mind <username>?"
          ></textarea>
        </div>
      
      <div id={styles["engagement-container"]}>
        <div className={styles["engagement-button"]} onClick={handleImageClick}>
          <FaImages />
          <span>Media</span>
        </div>
        
        <button className={styles["three"]}>
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
