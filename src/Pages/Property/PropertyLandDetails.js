import React, { useState } from 'react';
import { FaLeftRight, FaFileCircleQuestion, FaLocationDot } from "react-icons/fa6";
import {  FaCity, } from "react-icons/fa";
import { ReplyCard } from "../../Cards/Property Cards/ReplyCard.jsx";
import { Link, useLocation } from "react-router-dom";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import './PropertyDetails.css';
import { useQuery } from 'react-query';
import { getProperty } from '../../utils/api.js';
import { PuffLoader } from 'react-spinners';

export const PropertyLandDetails = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation(); //complete path of our page
  const id = pathname.split("/").slice(-1)[0];
  console.log(id);
  const { data, isError, isLoading } = useQuery(["Property", id], () =>
    getProperty(id)
  );
  console.log(data);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    // Here you should add logic to save the property details
  };

  if (isLoading) {
    return (
      <div className="loaderContainer">
        <PuffLoader />
      </div>
    );
  }

  if (isError) {
    return <div>Error while fetching the data</div>;
  }

  return (
    <div className="PropertyDetailsContainer">
      <div className="property-image-container">
        <img
          id="mainproperty-image"
          src={require("../../Res/image/land.jpg")}
        />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/land.jpg")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/land.jpg")}
            />
          </div>
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/land.jpg")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/land.jpg")}
            />
          </div>
        </div>
      </div>

      <div className="property-display-card">
        <Link to="/image-slideshow">
          <div className="MoreThumbnailsProperty">
            <img src={require("../../Res/image/house.jpeg")} />
            <img src={require("../../Res/image/image-dummy-house.png")} />
            <img src={require("../../Res/image/house.jpeg")} />
          </div>
        </Link>

        <div className="property-fist-row">
          <div className="title-div">
            <h1 id="title-property">{data.title}</h1>
            <div className="share-content">
              <PopupShare />
            </div>
          </div>
          <div className="property-second-row">
            <div className="icon-with-text">
              <div className="property-icon">
                <FaLeftRight />
              </div>
              <div className="text">{data.land?.area} sqft</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaCity />
              </div>
              <div className="text">{data.land?.land_type}</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaFileCircleQuestion />
              </div>
              <div className="text">{data.land?.ownership_type}</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaLocationDot />
              </div>
              <div className="text">{data.land?.location}</div>
            </div>
          </div>

          <div className="property-desc">
            <h3>Description of the Land:</h3>
            <p>{data.description}</p>
          </div>

          <div className="property-third-row">
            <Link to="/make-payment">
              <button id="button-buy">RM {data.price}</button>
            </Link>
            <div className="save">
              <button
                id="saved-button"
                style={{
                  backgroundColor: isSaved ? "orange" : "#fffdef",
                  color: isSaved ? "white" : "black",
                }}
                onClick={handleSaveClick}
              >
                <img src={require("../../Res/image/save.png")} alt="Save" />
                {isSaved ? "SAVED" : "SAVE"}
              </button>
            </div>
          </div>

          <div className="property-fourth-row">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Location</div>
                <div className="info-value">{data.land?.location}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Property Type</div>
                <div className="info-value">{data.land?.land_type}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Size</div>
                <div className="info-value">{data.land?.area}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Type</div>
                <div className="info-value">{data.land?.ownership_type}</div>
              </div>
            </div>

            <div className="seller-info">
              <h2>Seller Info</h2>
              <div className="seller-content">
                <img
                  className="ProfileView"
                  src={require("../../Res/image/user profile.png")}
                />
                <div className="seller-detail">
                  <h4>{data.seller.username}</h4>
                  <p>{data.seller.location}</p>
                  <p>{data.seller.email}</p>
                  <p>{data.seller.phoneNumber}</p>
                  <br />
                </div>
              </div>

              <Link to="/view-account-header">
                <button id="seller-infobutton">Profile</button>
              </Link>

              <Link to="/view-account-header">
                <button id="seller-infobutton">Chat</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
