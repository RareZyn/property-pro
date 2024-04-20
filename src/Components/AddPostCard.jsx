function AddPostCard(){
    return(
        <button className="share-post">
        <div className="share-firstRow">
          <img
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
          <p id="user-text-button">What's on your mind Azim?</p>
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
    )
}

export default AddPostCard