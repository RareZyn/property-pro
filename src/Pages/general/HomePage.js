import "./HomePage.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import { useMostHotProperty } from "../../hooks/useMostHotProperty.jsx";

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
  const [isSuggestVisible, setIsSuggestVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const communityElement = document.querySelector(".community-grid");
      const brokerElement = document.querySelector(".broker-grid");
      const suggestElement = document.querySelector(
        ".HomePageSuggestedPropertiesContainer"
      );

      if (isElementInViewport(communityElement)) {
        setIsCommunityVisible(true);
      }
      if (isElementInViewport(brokerElement)) {
        setIsBrokerVisible(true);
      }
      if (isElementInViewport(suggestElement)) {
        setIsSuggestVisible(true);
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
  
 const { data, isLoading, isError } = useMostHotProperty();

  const renderCard = (data) => {
    if (!data.propertyType) {
      return null;
    }

    switch (data.propertyType) {
      case "Vehicle":
        return (
          <VehicleDisplayCard
            key={data.property_id}
            card={data}
            link={`/property-Vehicle-Details/${data.property_id}`}
          />
        );
      case "House":
        return (
          <HouseDisplayCard
            key={data.property_id}
            card={data}
            link={`/property-House-Details/${data.property_id}`}
          />
        );
      case "Land":
        return (
          <LandDisplayCard
            key={data.property_id}
            card={data}
            link={`/property-Land-Details/${data.property_id}`}
          />
        );
      default:
        return null;
    }
  };


 if (isLoading) {
   return <div>Loading...</div>;
 }

 if (isError) {
   return <div>Error fetching data</div>;
 }

 if (!data || data.length === 0) {
   return <div>No hot items available</div>;
 }
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
          <img src={require("../../Res/image/men-image1.png")} alt="Buyer" />
        </div>
        <div
          className={`homepage-img homepage-img-men ${
            isSellerHovered ? "enlarged" : ""
          }`}
          onMouseEnter={handleSellerHover}
          onMouseLeave={() => setIsSellerHovered(false)}
        >
          <img src={require("../../Res/image/women-image.png")} alt="Seller" />
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
            to="/publish-property"
            className={`seller ${isSellerHovered ? "enlarged" : ""}`}
            onMouseEnter={handleSellerHover}
            onMouseLeave={() => setIsSellerHovered(false)}
          >
            SELLER
          </Link>
        </div>
      </div>

      <Link to={"/forum-page"}>
        <div
          className={`community-grid ${isCommunityVisible ? "slide-in" : ""}`}
        >
          <div className="img-div1">
            <img
              src={require("../../Res/image/community-image.png")}
              className="community-img"
              alt="Community"
            />
          </div>
          <div className="community-details">
            <div className="community-heading">COMMUNITY</div>
            <div className="community-desc">
              Join the discussion with multiple people around the globe.
            </div>
          </div>
        </div>
      </Link>

      <div className={`broker-grid ${isBrokerVisible ? "slide-in" : ""}`}>
        <div className="img-div2">
          <img
            src={require("../../Res/image/broker-image.png")}
            className="broker-img"
            alt="Broker"
          />
        </div>
        <div className="broker-details">
          <div className="broker-heading">Become our broker</div>
          <div className="broker-desc">
            Are you a real estate agent in Malaysia? Join us as our broker to
            help people in property transaction.
          </div>
          <div className="broker-btns">
            <Link to="/register-broker">
              <button className="homepage-btn">SIGN UP</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="HomePageSuggestedPropertiesContainer">
        <h1 className="property-headline" >Hot Items</h1>
        <Swiper
          id="swiper"
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.property_id}>{renderCard(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
