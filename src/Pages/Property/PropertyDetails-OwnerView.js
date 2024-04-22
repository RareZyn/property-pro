import "./PropertyDetails.css";
import "./PropertyDetails-OwnerView.css";
import { Link } from "react-router-dom";
import { MyAccountHeader } from "../general/MyAccountHeader";

export const PropertyDetailsOwnerView = () => {
  return (
    <div className="PropertyDetails-OwnerView">
      <NavHeader />
      <MyAccountHeader
        name="Username"
        bio="please guide me"
        currentPage="Property"
      />

      <div className="main-img">
        <div className="main-img-div">
          <Link to="/manage-property">
            <span className="back-icon">
              <img src={require("../../Res/image/back-icon.png")} />
            </span>
          </Link>
          <div className="main-img-box">
            <img src={require("../../Res/image/IMG PH.png")} />
          </div>
          <div className="invisible-element"></div>
        </div>
      </div>

      <div className="property-details">
        <div className="other-imgs-box">
          <div className="delete-icon-div">
            <div className="delete-btn">
              <img className={require("../../Res/image/delete-icon.png")} />
            </div>
            <div>Delete</div>
          </div>

          <div className="other-imgs">
            <img src={require("../../Res/image/IMG PH.png")} />
          </div>

          <div className="edit-icon-div">
            <div className="edit-btn">
              <img src={require("../../Res/image/edit-icon.png")} />
            </div>
            <div>Edit</div>
          </div>
        </div>

        <div className="item-div">
          <div className="first-line-div">
            <span className="item-title">Item Title</span>
            <div className="share-icon">
              <div>
                <img src={require("../../Res/image/share-icon-black.png")} />
              </div>
              <span className="shares-text">Shares</span>
            </div>
          </div>

          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            incidunt quaerat totam eos alias rerum odio enim deleniti porro,
            culpa explicabo reprehenderit exercitationem aliquam molestias
            doloremque, error hic dolorum facilis.
          </div>

          <div className="progress-bar">
            <div className="progress"></div>
          </div>

          <div className="progress-text">
            <div>
              Upload
              <br />
              property
            </div>
            <div>
              Document
              <br />
              verification
            </div>
            <div>
              Broker
              <br />
              verification
            </div>
            <div>
              Property
              <br />
              verified
            </div>
          </div>
        </div>

        <div className="comments-section">
          <div className="comments">Comments</div>

          <div className="comments-container">
            <div className="commenter-details">
              <div className="icon-name-div">
                <img src={require("../../Res/image/user profile.png")} />
              </div>
              <div>
                <div className="name">Wany Haritah</div>
                <div className="time-public-div">10 mins ago . Public</div>
              </div>
            </div>

            <div className="comment-text">Comment bla bla bla bla bla</div>
          </div>

          <div className="comments-container">
            <div className="commenter-details">
              <div className="icon-name-div">
                <img className={require("../../Res/image/user profile.png")} />
              </div>
              <div>
                <div className="name">Wany Haritah</div>
                <div claclassNamess="time-public-div">10 mins ago . Public</div>
              </div>
            </div>

            <div className="comment-text">Comment bla bla bla bla bla</div>
          </div>
        </div>
      </div>
    </div>
  );
};
