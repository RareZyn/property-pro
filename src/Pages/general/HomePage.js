import React, { useState } from "react";
import { useEffect } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader";

export const HomePage = () => {
  const [isBuyerHovered, setIsBuyerHovered] = useState(false);
  const [isSellerHovered, setIsSellerHovered] = useState(false);

  const handleBuyerHover = () => {
    setIsBuyerHovered(true);
    setIsSellerHovered(false);
  };

  const handleSellerHover = () => {
    setIsSellerHovered(true);
    setIsBuyerHovered(false);
  };

  const [isCommunityVisible, setIsCommunityVisible] = useState(false);
  const [isBrokerVisible, setIsBrokerVisible] = useState(false);
  const [isAdVisible, setIsAdVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const communityElement = document.querySelector(".community-grid");
      const brokerElement = document.querySelector(".broker-grid");
      const adElement = document.querySelector(".ad-grid");

      if (isElementInViewport(communityElement)) {
        setIsCommunityVisible(true);
      }
      if (isElementInViewport(brokerElement)) {
        setIsBrokerVisible(true);
      }
      if (isElementInViewport(adElement)) {
        setIsAdVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isElementInViewport = (element) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <div className="HomePage">
      <div className="homepage-img-grid">
        <div
          className={`homepage-img homepage-img-women ${
            isBuyerHovered ? "enlarged" : ""
          }`}
          onMouseEnter={handleBuyerHover}
          onMouseLeave={() => setIsBuyerHovered(false)}
        >
          <img src={require("../../Res/image/men-image1.png")} />
        </div>
        <div
          className={`homepage-img homepage-img-men ${
            isSellerHovered ? "enlarged" : ""
          }`}
          a
          onMouseEnter={handleSellerHover}
          onMouseLeave={() => setIsSellerHovered(false)}
        >
          <img src={require("../../Res/image/women-image.png")} />
        </div>
      </div>

      <div className="buyer-seller-section">
        <div className="buyer-seller-grid">
          <Link
            to="/browser-property"
            className={`buyer ${isBuyerHovered ? "enlarged" : ""}`}
            onMouseEnter={handleBuyerHover}
            onMouseLeave={() => setIsBuyerHovered(false)}
          >
            BUYER
          </Link>
          <Link
            to="/manage-property"
            className={`seller ${isSellerHovered ? "enlarged" : ""}`}
            onMouseEnter={handleSellerHover}
            onMouseLeave={() => setIsSellerHovered(false)}
          >
            SELLER
          </Link>
        </div>
      </div>

      <div className={`community-grid ${isCommunityVisible ? "slide-in" : ""}`}>
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

      <div className={`broker-grid ${isBrokerVisible ? "slide-in" : ""}`}>
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

      <div className={`ad-grid ${isAdVisible ? "slide-in" : ""}`}>
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
