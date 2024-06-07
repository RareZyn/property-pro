import React, { useContext, useState, useEffect } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaBed, FaShower } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import "./PropertyDetails.css";
import { useQuery } from "react-query";
import { getProperty } from "../../utils/api.js";
import { PuffLoader } from "react-spinners";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../util.js";
import SavedButton from "../../hooks/SavedButton.jsx";

export const PropertyHouseDetails = () => {
  const { otherID } = useContext(UserContext);
  const { pathname } = useLocation(); //complete path of our page
  const propertyID = pathname.split("/")[2];

  const { data, isError, isLoading } = useQuery(["Property", propertyID], () =>
    getProperty(propertyID)
  );

  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  const userId = user?._id;

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
        <img id="mainproperty-image" src={data?.images[0]} />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[1]} />
            <img id="property-image" src={data?.images[2]} />
          </div>
          <div className="property-image-1row">
            <img id="property-image" src={data?.images[3]} />
            <img id="property-image" src={data?.images[4]} />
          </div>
        </div>
      </div>

      <div className="property-display-card">
        <Link to="/image-slideshow">
          <div className="MoreThumbnailsProperty">
            <img src={data?.images[0]} />
            <img src={data?.images[1]} />
            <img src={data?.images[2]} />
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
                <FaBed />
              </div>
              <div className="text">{data.house?.rooms} Bed</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaShower />
              </div>
              <div className="text">{data.house?.bathrooms} Bath</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaHouse />
              </div>
              <div className="text">{data.house?.size}</div>
            </div>
          </div>

          <div className="property-desc">
            <h3>Description of the House:</h3>
            <p>{data.description}</p>
          </div>

          <div className="property-third-row">
            <Link to={`/${data.house.propertyID}/make-payment`}>
              <button id="button-buy">RM {data.price}</button>
            </Link>
            <div className="save">
              <SavedButton propertyID={propertyID} userId={userId} />
            </div>
          </div>

          <div className="property-fourth-row">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Location</div>
                <div className="info-value">{data.house?.location}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Floor Size</div>
                <div className="info-value">{data.house?.size}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Number of bedrooms</div>
                <div className="info-value">{data.house?.rooms} bedrooms</div>
              </div>
              <div className="info-section">
                <div className="info-label">Number of bathrooms</div>
                <div className="info-value">
                  {data.house?.bathrooms} bathrooms
                </div>
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
