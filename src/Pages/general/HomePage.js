import "./HomePage.css";

export const HomePage = () => {
  return (
    <div className="HomePage">

      <div class="homepage-img-grid">
          <div class="homepage-img homepage-img-women">
              <img src={require("../../Res/image/men-image1.png")}/>
          </div>
          <div class="homepage-img homepage-img-men" >
              <img src={require("../../Res/image/women-image.png")}/>
          </div>
      </div>

      <div class="buyer-seller-section">
          <div class="buyer-seller-grid">
              <a href="" class="text buyer">
                  BUYER
              </a>
              <a href="" class="text seller">
                  SELLER
              </a>
          </div>
      </div>

      <div class="community-grid">
          <div class="img-div1">
              <img src={require("../../Res/image/community-image.png")} class="community-img"/>
          </div>
          <div class="community-details">
              <div class="community-heading">COMMUNITY</div>
              <div class="community-desc">Join the discussion with multiple people around the globe.</div>
              <a href="">
                  <button class="homepage-btn">COMMUNITY</button>
              </a>
          </div>
      </div>

      <div class="broker-grid">
        <div class="img-div2">
            <img src={require("../../Res/image/broker-image.png")} class="broker-img"/>
        </div>
        <div class="broker-details">
            <div class="broker-heading">Become our broker</div>
            <div class="broker-desc">Are you a real estate agent in Malaysia?
                Join us as our broker to help people in property transaction.
            </div>
            <div class="broker-btns">
                <a href="">
                    <button class="homepage-btn log-in-btn">LOG IN</button>
                </a>
                <a href="">
                    <button class="homepage-btn">SIGN UP</button>
                </a>
            </div>
        </div>
      </div>

      <div class="ad-grid">
          <div class="img-div3">
              <img src={require("../../Res/image/ad-image.png")} class="ad-img"/>
          </div>
          <div class="ad-details">
              <div class="ad-heading">ADVERTISEMENT</div>
              <div class="ad-desc">
                  This part can be used as advertisement or any
                  current issues or news to be updated for user to read
                  or be notified.
              </div>
          </div>
      </div>

      <div class="extra-div"></div>
    </div>
  );
};
