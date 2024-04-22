import "./PropertyDetails.css";
import { MyAccountHeader } from "../general/MyAccountHeader";
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader";
export const PropertyDetails = () => {
  //do a function onClick for saved icon
  //if click saved icon, will create a new propertydisplaycard
  //and display it at SavedProperty page

  return (
    <div className="PropertyDetails">
      <MyAccountHeader
        name="Username"
        bio="please guide me"
        currentPage="Property"
      />

      <div className="main-img">
        <div className="main-img-div">
          <Link to="/browser-property">
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
        <div className="other-imgs">
          <img src={require("../../Res/image/IMG PH.png")} />
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

          <Link to="/view-account-property">
            <div className="seller-name">Seller</div>
          </Link>

          <div className="item-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            incidunt quaerat totam eos alias rerum odio enim deleniti porro,
            culpa explicabo reprehenderit exercitationem aliquam molestias
            doloremque, error hic dolorum facilis.
          </div>

          <div className="price-saved-div">
            <div className="invisible-element"></div>
            <Link to="/make-payment">
              <button className="price-btn">Price RMXX.XX</button>
            </Link>
            <div className="bookmark-icon">
              <img src={require("../../Res/image/bookmark-icon.png")} />
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
                <img src={require("../../Res/image/user profile.png")} />
              </div>
              <div>
                <div className="name">Wany Haritah</div>
                <div className="time-public-div">10 mins ago . Public</div>
              </div>
            </div>

            <div className="comment-text">Comment bla bla bla bla bla</div>
          </div>
        </div>
      </div>
    </div>
  );
};
