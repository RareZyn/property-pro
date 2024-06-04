import React, { useState } from 'react';
import { FaLeftRight, FaFileCircleQuestion, FaLocationDot } from "react-icons/fa6";
import {  FaCity, } from "react-icons/fa";
import { ReplyCard } from "../../Cards/Property Cards/ReplyCard.jsx";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import './PropertyDetails.css';

export const PropertyLandDetailsOverview = () => {

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
      <div className="overview-first-row">
          
        <Link to="/image-slideshow">
          <div className="MoreThumbnailsProperty">
            <img src={require("../../Res/image/land.jpg")} />
            <img src={require("../../Res/image/land.jpg")} />
            <img src={require("../../Res/image/land.jpg")} />
          </div>
        </Link> 
        </div>

        <div className="Overview-edit">
        <button className="delete-button">
            <img
              src={require("../../Res/image/trash icon.png")}
              id="delete-icon"
            />
            <span id="delete">DELETE</span>
          </button>
          <button className="price" >
            <span>
            <h1>RM 50,000</h1>
          </span>
          </button>
          <Link to="/publish-property">
        <button className="edit-button">
            <img
              src={require("../../Res/image/pencil icon.png")}
              id="edit-icon"
            />
            <span id="edit">EDIT</span>
          </button>
          </Link>
       </div>

        <div className="property-fist-row">
          <div className="title-div">
            <h1 id="title-property">Damansara Land For Sale</h1>
            <div className="share-content"><PopupShare /></div>
          </div>

          <div className="property-second-row">
          
            <div className="icon-with-text">
              <div className="property-icon">
                <FaLeftRight />
              </div>
              <div className="text">
                5000 sqft
              </div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaCity />
              </div>
              <div className="text">
                Residential
              </div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaFileCircleQuestion />
              </div>
              <div className="text">
                Freehold
              </div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaLocationDot />
              </div>
              <div className="text">
                Selangor
              </div>
            </div>

          </div>

          <div className="property-desc">
            <h3>Description of the product:</h3>
            <p>
          testing
            </p>
          </div>

          <div className="overview-progressbar">
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
          </div>

          <div className="property-fourth-row">
            <div className="info-page-container">
              <h2>Property Information</h2>

              
              <div className="info-section">
                <div className="info-label">Location</div>
                <div className="info-value">Damansara, Selangor</div>
              </div>
              <div className="info-section">
                <div className="info-label">Property Type</div>
                <div className="info-value">Land For Sale</div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Size</div>
                <div className="info-value">2120 sqft</div>
              </div>
              <div className="info-section">
                <div className="info-label">Land Type</div>
                <div className="info-value">Development Land</div>
              </div>
              <div className="info-section">
                <div className="info-label">Tenure</div>
                <div className="info-value">Freehold</div>
              </div>

            
          </div></div>

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
