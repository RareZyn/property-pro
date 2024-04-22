import "./MyAccountPost.css";
import PostCard from "../../Components/PostCard"
import { MyAccountHeader } from './MyAccountHeader';

export const MyAccountPost = () => {
  return (
    
    <div className="MyAccountPost">
  <div className="MyAccountPost-page">
      <button className="share-post">
        <div className="share-firstRow">
          <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
          <p id="user-text-button">Post something....</p>
        </div>
        <div className="share-secondRow">
          <div className="box one">
            <img
              id="button-image"
              src={require("../../Res/image/image icon.png")}
            />
            <p id="button-text">Likes</p>
          </div>
          <div className="box two">
            <img id="button-image" src={require("../../Res/image/video.png")} />
            <p id="button-text">Video</p>
          </div>
        </div>
      </button>
   
<div className="mypost">
        <div className="user-profile">
          <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
          <section id="user-text">
            <p id="user-name">Username</p>
            <p id="user-time">10 min ago</p>
          </section>
        </div>
        <div className="user-text">
          <p id="user-text-post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim.
          </p>
        </div>
        <div className="user-button">
          <button className="button">
            <img id="img-button" src={require("../../Res/image/heart.png")} />
            <p id="img-description">Likes</p>
          </button>
          <button className="button">
            <img
              id="img-button"
              src={require("../../Res/image/message-square.png")}
            />
            <p id="img-description">Comment</p>
          </button>
          <button className="button">
            <img id="img-button" src={require("../../Res/image/share-2.png")} />
            <p id="img-description">Share</p>
          </button>
        </div>
      </div>


      <div className="mypost">
        <div className="user-profile">
          <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
          <section id="user-text">
            <p id="user-name">Username</p>
            <p id="user-time">10 min ago</p>
          </section>
        </div>
        <div className="user-text">
          <p id="user-text-post">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas
            ligula massa, varius a, semper congue, euismod non, mi. Proin
            porttitor, orci nec nonummy molestie, enim est eleifend mi, non
            fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa,
            scelerisque vitae, consequat in, pretium a, enim.
          </p>
        </div>
        <div className="user-button">
          <button className="button">
            <img id="img-button" src={require("../../Res/image/heart.png")} />
            <p id="img-description">Likes</p>
          </button>
          <button className="button">
            <img
              id="img-button"
              src={require("../../Res/image/message-square.png")}
            />
            <p id="img-description">Comment</p>
          </button>
          <button className="button">
            <img id="img-button" src={require("../../Res/image/share-2.png")} />
            <p id="img-description">Share</p>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};


      