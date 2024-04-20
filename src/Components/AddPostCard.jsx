import styles from "./AddPostCard.module.css";
import pp from "../Res/image/user profile.png";
import likeIcon from "../Res/image/heart.png";
import imageIcon from "../Res/image/image icon.png";
import videoIcon from "../Res/image/video.png";

function AddPostCard(){
    return(
        <div className={`${styles["add-post-card-container"]} box-shadow`}>
            <div className={styles["container-1"]}>
            <img
                id={styles["user-image"]}
                src={pp}
            />
            <p id={styles["user-text-button"]}>What's on your mind Azim?</p>
            </div>
            <div className={styles["img-vid-container"]}>
            <div className={styles["img-vid-btn"]}>
                <img src={imageIcon} />
                <p id="button-text">Image</p>
            </div>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["img-vid-btn"]}>
                <img src={videoIcon} />
                <p id="button-text">Video</p>
            </div>
            </div>
        </div>
    )
}

export default AddPostCard