import "./ForumCreatePost.css";

export const ForumCreatePost = () => {
  return (
    <div className="ForumCreatePost">
      <h1>Forum Create Post</h1>
      <div className="topic-discuss">
        <div className="user-profile">
          <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
          <section id="user-text">
            <p id="user-name">Wan Haritah</p>
            <p id="user-time">10 min ago</p>
          </section>
        </div>
        <div className="user-text"></div>
        <div className="user-button"></div>
      </div>
    </div>
  );
};
