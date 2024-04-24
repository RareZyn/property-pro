import { ReplyCard } from "../../Cards/Property Cards/ReplyCard";
import "./PropertyDetailsOverview.css";

export const PropertyDetailsOverview = () => {
  return (
    <div className="PropertyDetailsOverview">
      <div className="image-frame">
        <img
          src={require("../../Res/image/image-dummy-house.png")}
          id="overview-img"
        />
      </div>
      <div className="property-overview">
        <div className="overview-first-row">
          <button className="delete-button">
            <img
              src={require("../../Res/image/trash icon.png")}
              id="delete-icon"
            />
            <span id="delete">DELETE</span>
          </button>

          <div className="MoreThumbnails">
            <img src={require("../../Res/image/image icon.png")} />
            <img src={require("../../Res/image/image icon.png")} />
            <img src={require("../../Res/image/image icon.png")} />
          </div>

          <button className="edit-button">
            <img
              src={require("../../Res/image/pencil icon.png")}
              id="edit-icon"
            />
            <span id="edit">EDIT</span>
          </button>
        </div>

        <div className="overview-second-row">
          <span>
            <h1>House</h1>
          </span>
          <span>
            <h1>RM 50,000</h1>
          </span>
          <button className="share-button">
            <img
              src={require("../../Res/image/share-icon-black.png")}
              id="share-icon"
            />
            <span id="share">SHARE</span>
          </button>
        </div>

        <div className="overview-third-row">
          <p>
            Description: Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>

        <div className="overview-fourth-row">
          <div className="ProgressBar">
            <p>A section</p>
            <p>B section</p>
            <p>C section</p>
          </div>
          <div className="ProgressBarLabel">
            <p>Upload property</p>
            <p>Document verification</p>
            <p>null</p>
            <p>Broker verification</p>
            <p>Property verified</p>
          </div>

          <div className="comment-div" id="overview-fourth-row">
            <h1>Comment</h1>
            <ReplyCard />
            <ReplyCard />
            <ReplyCard />
          </div>
        </div>
      </div>
    </div>
  );
};
