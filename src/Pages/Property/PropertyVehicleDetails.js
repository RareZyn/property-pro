import "./PropertyDetails.css";
import React, { useContext, useState, useEffect } from "react";
import { FaCarSide, FaGauge, FaCalendarDays } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import PopupShare from "../../Cards/General Cards/PopupShare.jsx";
import { useQuery } from "react-query";
import { buyProperty, getProperty } from "../../utils/api.js";
import { PuffLoader } from "react-spinners";
import { UserContext } from "../../context/UserContext.js";
import { getUser} from "../../util.js";
import SavedButton from "../../hooks/SavedButton.jsx";

export const PropertyVehicleDetails = () => {
  const { otherID } = useContext(UserContext);
  const { pathname } = useLocation(); //complete path of our page
   const id = pathname.split("/")[2];

  const { data, isError, isLoading } = useQuery(["Property", id], () =>
    getProperty(id)
  );

  const {userToken} = useContext(UserContext);
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log('No user token');
    }
  }, [userToken]);

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
          src={require("../../Res/image/car.jpeg")}
        />
        <div className="property-image-div">
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/car.jpeg")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/car.jpeg")}
            />
          </div>
          <div className="property-image-1row">
            <img
              id="property-image"
              src={require("../../Res/image/car.jpeg")}
            />
            <img
              id="property-image"
              src={require("../../Res/image/car.jpeg")}
            />
          </div>
        </div>
      </div>

      <div className="property-display-card">
        <Link to="/image-slideshow">
          <div className="MoreThumbnailsProperty">
            <img src={require("../../Res/image/car.jpeg")} />
            <img src={require("../../Res/image/car.jpeg")} />
            <img src={require("../../Res/image/car.jpeg")} />
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
                <FaGauge />
              </div>
              <div className="text">{data.vehicle?.cc}cc</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaCarSide />
              </div>
              <div className="text">{data.vehicle?.seats} Seater</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaCalendarDays />
              </div>
              <div className="text">{data.vehicle?.ManufacturedYear}</div>
            </div>

            <div className="icon-with-text">
              <div className="property-icon">
                <FaTags />
              </div>
              <div className="text">{data.vehicle?.condition}</div>
            </div>
          </div>
          <div className="property-desc">
            <h3>Description of the Vehicle:</h3>
            <p>{data.desc}</p>
          </div>
          <div className="property-third-row">
            <Link to={`/${data.vehicle.propertyID}/make-payment`}>
              <button id="button-buy">RM {data.price}</button>
            </Link>
            <div className="save">
              <SavedButton />
            </div>
          </div>
          <div className="property-fourth-row">
            <div className="info-page-container">
              <h2>Property Information</h2>

              <div className="info-section">
                <div className="info-label">Vehicle Type</div>
                <div className="info-value">{data.vehicle?.vehicleType}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Vehicle Brand</div>
                <div className="info-value">{data.vehicle?.brand}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Model</div>
                <div className="info-value">{data.vehicle?.model}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Number of seats</div>
                <div className="info-value">{data.vehicle?.seats} seater</div>
              </div>
              <div className="info-section">
                <div className="info-label">Mileage</div>
                <div className="info-value">{data.vehicle?.mileage} </div>
              </div>
              <div className="info-section">
                <div className="info-label">Year of Production</div>
                <div className="info-value">
                  {data.vehicle?.ManufacturedYear}
                </div>
              </div>
              <div className="info-section">
                <div className="info-label">CC</div>
                <div className="info-value"> {data.vehicle?.cc}</div>
              </div>
              <div className="info-section">
                <div className="info-label">Usage</div>
                <div className="info-value">{data.vehicle?.condition}</div>
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

              <Link to={`/view-account/${otherID}`}>
                <button id="seller-infobutton">Profile</button>
              </Link>

              <Link to={`/view-account/${otherID}`}>
                <button id="seller-infobutton">Chat</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
