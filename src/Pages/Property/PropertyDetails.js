import "./PropertyDetails.css";
import React from 'react';
import { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaBed,FaShower,FaLayerGroup, FaImages } from "react-icons/fa";
import { ReplyCard } from "../../Cards/Property Cards/ReplyCard.jsx";
import { Link } from "react-router-dom";


export const PropertyDetails = () => {
  return (
    <div className="PropertyDetails">

<div className="property-image-container">

      <img
          id="mainproperty-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
        

      <div className="property-image-div">
      <div className="property-image-1row">
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
      </div>
      <div className="property-image-1row">
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
      </div>
      </div>
      </div>

      <div className="property-display-card">
      <Link to="/image-slideshow">
            {" "}
            <button id="imgbutton"> <FaImages /></button>
          </Link>

  
       <div className="MoreThumbnailsProperty">
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
        </div>
       

        <div className="property-fist-row">
          <h1 id="title-property">Petaling Jaya House</h1>
      <div>
        <button id="share-button" >
           <img src={require("../../Res/image/share-icon-black.png")} />
             Shares
          </button>  
       
          
        </div>
        
        <div className="property-second-row">
        <div className="icon-with-text">
            <div className="property-icon">
                <FaBed />
            </div>
            <div className="text">
                4 Bed
            </div>
        </div>

        <div className="icon-with-text">
            <div className="property-icon">
                <FaShower />
            </div>
            <div className="text">
                4 Bath
            </div>
        </div>

        <div className="icon-with-text">
            <div className="property-icon">
                <FaLayerGroup />
            </div>
            <div className="text">
                2 storey
            </div>
        </div>

        <div className="icon-with-text">
            <div className="property-icon">
                <FaHouse />
            </div>
            <div className="text">
                2120 sqft
            </div>
        </div>

        </div>

        <div className="property-desc">
        <h3>Description of the product:</h3>
          <p>
           Lorem ipsum dolor sit amet, consectetur
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

        <div className="property-fourth-row">

        <div className="info-page-container">
      <h2>Property Information</h2>

      <div className="info-section">
        <div className="info-label">Location</div>
        <div className="info-value">Petaling Jaya, Selangor</div>
      </div>
      <div className="info-section">
        <div className="info-label">Property Type</div>
        <div className="info-value">Rumah Teres 2 Tingkat Dijual</div>
      </div>
      <div className="info-section">
        <div className="info-label">Floor Size</div>
        <div className="info-value">2120 sqft</div>
      </div>
      <div className="info-section">
        <div className="info-label">Number of bedrooms</div>
        <div className="info-value">4 bedrooms</div>
      </div>
      <div className="info-section">
        <div className="info-label">Number of bathrooms</div>
        <div className="info-value">3 bathrooms</div>
      </div>
      <div className="info-section">
        <div className="info-label">Furnished</div>
        <div className="info-value">Unfurnished</div>
      </div>
      <div className="info-section">
        <div className="info-label">Floors</div>
        <div className="info-value">2 Storey</div>
      </div>
    </div>

    <div className="seller-info">
    <h2>Seller Info</h2>
      <h4> Razin </h4>
      <p>Kuala Lumpur</p>
      <p>user@gmail.com</p>
      <p>0123457693</p>
      <br></br>

      <Link to="/view-account-header">
            {" "}
            <button id="seller-infobutton">Profile</button>
          </Link>

      <Link to="/view-account-header">
            {" "}
            <button id="seller-infobutton">Chat</button>
          </Link>
    </div>

    </div>



        <div className="comment-div">
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
