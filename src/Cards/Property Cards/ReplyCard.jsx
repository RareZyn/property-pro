import "./ReplyCard.css";
export const ReplyCard = () => {
  return (
    <div className="ReplyCard">
      <div className="first-div">
        <div className="profile-picture">
          <img src={require("../Res/image/user profile.png")} />
        </div>
        <div id="comment">
          <p id="comment-user">Ahmad</p>
          <p id="comment-reply">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore et
            assumenda cupiditate nam ea suscipit pariatur, est sequi, libero ut
            ipsum, quae repudiandae aliquam doloribus beatae rerum dolores
            deleniti praesentium?
          </p>
        </div>
      </div>
      <div className="second-div">
        <p id="last-seen">2 hours</p>
        <button id="like-button">
          <span id="like-total">7 </span> Like
        </button>
      </div>
    </div>
  );
};
