import styles from "./PostCard.module.css";
import { useState,useContext,useEffect } from "react";
import TruncatedText from "../General Cards/TruncatedText";
import likeIcon from "../../Res/image/heart.png";
import likedIcon from "../../Res/image/red-heart.png";
import commentIcon from "../../Res/image/message-square.png";
import { UserContext } from "../../context/UserContext";
import { getUser } from "../../utils/userAPI";
import pp from "../../Res/image/user profile.png";
import { ReplyCard } from "../Property Cards/ReplyCard";
import PopupShare from "../General Cards/PopupShare";
import { ForumContext } from "../../context/ForumContext";
import ProfilePicture from "../Image Placeholder/ProfilePicture";


function PostCard({ forumObj, name, lastSeen, postPrivacy, textForum, forumID, profilePicture }) {
  const longText =
    textForum;
  const [liked, setLiked] = useState(false);
  const [isDiscussionClicked, setIsDiscussionClicked] = useState(true);
  const [showPopdownDiscussion, setShowPopdownDiscussion] = useState(
    "PopdownDiscussion-hidden"
  );
  const [share, setShare] = useState(true);
  let likeButton;
  const { toggleLike,fetchComments,currentForum,fetchForumById } = useContext(ForumContext);
  const [comments, setComments] = useState([]);
  const [ loading,setLoading ] = useState(false);
  const {userToken} = useContext(UserContext);
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log('No user token');
    }
  }, [userToken]);

  const userID = user?._id;

  // useEffect(() => {
  //   const fetchForum = async () => {
  //     try{
  //       await fetchForumById(forumID);
  //     }catch (error) {
  //       console.error('Failed to fetch current forum {PostCard}:', error);
  //     }
  //   }
  // },[])

  const like = () => {
    toggleLike( forumID,userID );
    setLiked(!liked);
  };

  const popdownDiscussion =  () => {
    console.log("Clicked");
    console.log(forumObj.comments);
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
  for (let i = 0; i < 2; i++) {
    replyItems.push(<ReplyCard />);
  }

  return (
    <>
      <div id={styles["post-card-container"]} className="box-shadow">
        <div id={styles["user-profile"]}>
          <div id={styles["profile-container"]}>
            <ProfilePicture imgLink={profilePicture} size='50px'/>
          </div>
          <div id={styles["user-details"]}>
            <span id={styles["user-name"]}>{name}</span>
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
        
        <div className={styles[showPopdownDiscussion]}>
          {/* {replyItems} */}

          <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
            {forumObj.comments
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .map(comment => {
              console.log(comment);
              return(
                <li key={comment._id}>
                  <ReplyCard commentObj={comment}/>
                </li>
              )
            })}
          </ul>

        </div>

        

      </div>
    </>
  );
}

export default PostCard;
