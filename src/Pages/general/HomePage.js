import "./HomePage.css";
import { MyAccountHeader } from "./MyAccountHeader";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="HomePage">
      <MyAccountHeader
        name="Username"
        bio="please guide me"
        currentPage="Home"
      />

      <div className="homepage-img-grid">
        <div className="homepage-img homepage-img-women">
          <img src={require("../../Res/image/men-image1.png")} />
        </div>
        <div className="homepage-img homepage-img-men">
          <img src={require("../../Res/image/women-image.png")} />
        </div>
      </div>

      <div className="buyer-seller-section">
        <div className="buyer-seller-grid">
          <Link to="/browser-property" className="buyer">
            BUYER
          </Link>
          <Link to="/manage-property" className="seller">
            SELLER
          </Link>
        </div>
      </div>

      <div className="community-grid">
        <div className="img-div1">
          <img
            src={require("../../Res/image/community-image.png")}
            class="community-img"
          />
        </div>
        <div className="community-details">
          <div className="community-heading">COMMUNITY</div>
          <div className="community-desc">
            Join the discussion with multiple people around the globe.
          </div>
          <Link to="/forum-page">
            <button className="homepage-btn">COMMUNITY</button>
          </Link>
        </div>
      </div>

      <div className="broker-grid">
        <div className="img-div2">
          <img
            src={require("../../Res/image/broker-image.png")}
            className="broker-img"
          />
        </div>
        <div className="broker-details">
          <div className="broker-heading">Become our broker</div>
          <div className="broker-desc">
            Are you a real estate agent in Malaysia? Join us as our broker to
            help people in property transaction.
          </div>
          <div className="broker-btns">
            <Link to="/login-broker">
              <button className="homepage-btn log-in-btn">LOG IN</button>
            </Link>
            <Link to="/register-broker">
              <button className="homepage-btn">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="ad-grid">
        <div className="img-div3">
          <img
            src={require("../../Res/image/ad-image.png")}
            className="ad-img"
          />
        </div>
        <div className="ad-details">
          <div className="ad-heading">ADVERTISEMENT</div>
          <div className="ad-desc">
            This part can be used as advertisement or any current issues or news
            to be updated for user to read or be notified.
          </div>
        </div>
      </div>

      <div className="extra-div"></div>
    </div>
  );
};
