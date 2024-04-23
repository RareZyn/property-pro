import "./PropertyDetails.css";
import { ReplyCard } from "../../Cards/Property Cards/ReplyCard.jsx";
import { Link } from "react-router-dom";
export const PropertyDetails = () => {
  return (
    <div className="PropertyDetails">
      <div className="property-image-div">
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
      </div>
      <div className="property-display-card">
        <div className="MoreThumbnailsProperty">
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
        </div>

        <div className="property-fist-row">
          <h1 id="title-property">Petaling Jaya House</h1>
          <button id="share-button">
            <img src={require("../../Res/image/share-icon-black.png")} />
            Shares
          </button>
        </div>
        <div className="property-second-row">
          <Link to={"/view-account-header"}>
            <p id="seller-name">Seller Name: Razin</p>
          </Link>
          <p>
            Description of the product: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>

        <div className="property-third-row">
          <Link to="/make-payment">
            {" "}
            <button id="button-buy">RM 50,000</button>
          </Link>

          <button id="saved-button">
            <img src={require("../../Res/image/saved.png")} />
            SAVE
          </button>
        </div>

        <div className="comment-div">
          <h1>Comment</h1>
          <ReplyCard />
          <ReplyCard />
          <ReplyCard />
        </div>
      </div>
    </div>
  );
};
