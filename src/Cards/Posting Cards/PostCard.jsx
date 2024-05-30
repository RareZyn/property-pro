import styles from "./PostCard.module.css";
import { useState } from "react";
import TruncatedText from "../General Cards/TruncatedText";
import likeIcon from "../../Res/image/heart.png";
import likedIcon from "../../Res/image/red-heart.png";
import commentIcon from "../../Res/image/message-square.png";

import pp from "../../Res/image/user profile.png";
import { ReplyCard } from "../Property Cards/ReplyCard";
import PopupShare from "../General Cards/PopupShare";

function PostCard({ name, lastSeen, postPrivacy }) {
  const longText =
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestib";
  const [liked, setLiked] = useState(false);
  const [isDiscussionClicked, setIsDiscussionClicked] = useState(true);
  const [showPopdownDiscussion, setShowPopdownDiscussion] = useState(
    "PopdownDiscussion-hidden"
  );
  const [share, setShare] = useState(true);
  let likeButton;
  const like = () => {
    setLiked(!liked);
  };

  const popdownDiscussion = () => {
    console.log("Clicked");
    if (isDiscussionClicked) {
      setShowPopdownDiscussion("PopdownDiscussion");
      setIsDiscussionClicked(false);
    } else {
      setShowPopdownDiscussion("PopdownDiscussion-hidden");
      setIsDiscussionClicked(true);
    }
  };

  if (liked) {
    likeButton = <img src={likedIcon} alt="likes" srcset="" />;
  } else {
    likeButton = <img src={likeIcon} alt="likes" srcset="" />;
  }

  let replyItems = [];
  for (let i = 0; i < 5; i++) {
    replyItems.push(<ReplyCard />);
  }


  return (
    <>
      <div id={styles["post-card-container"]} className="box-shadow">
        <div id={styles["user-profile"]}>
          <div id={styles["profile-container"]}>
            <img src={pp} alt="Profile" srcset="" />
          </div>
          <div id={styles["user-details"]}>
            <span id={styles["user-name"]}>Name</span>
            <span id={styles["user-post"]}>last Seen • Post Privacy</span>
          </div>
        </div>

        <div id={styles["posting-container"]}>
          <TruncatedText text={longText} maxlength={500} />
        </div>

        <div id={styles["engagement-container"]}>
          <div className={styles["engagement-button"]} onClick={like}>
            {likeButton}
            <span>Likes</span>
          </div>
          <div
            className={styles["engagement-button"]}
            onClick={popdownDiscussion}
          >
            <img src={commentIcon} alt="comment" />
            <span>Discuss</span>
          </div>
          <div className={styles["engagement-button"]}>

            <PopupShare></PopupShare>
          </div>
        </div>
        
        <div className={styles[showPopdownDiscussion]}>{replyItems}</div>
      </div>
    </>
  );
}

export default PostCard;
