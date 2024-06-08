import React, { useState, useEffect, useContext } from "react";
import "./MakePaymentPage.css";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getProperty, buyProperty } from "../../utils/api";
import { UserContext } from "../../context/UserContext.js";
import { getUser } from "../../utils/userAPI";
import { toast } from "react-toastify";
import { PuffLoader } from "react-spinners";

export const MakePaymentSuccess = () => {
  const { pathname } = useLocation();
  const propertyID = pathname.split("/")[1]; // Adjust index based on your route structure

  const { data, isError, isLoading } = useQuery(["Property", propertyID], () =>
    getProperty(propertyID)
  );

  useEffect(() => {
    if (data) {
      console.log("Fetched property data:", data);
      console.log("Property ID: " + propertyID);
    }
  }, [data, propertyID]);

  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
        console.log("User ID:" + userData?._id); // Use userData instead of user
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  if (isLoading) {
    return (
      <div>
        <PuffLoader />
      </div>
    );
  }
  const handleBuyProperty = async () => {
    try {
      if (user?._id && propertyID) {
        await buyProperty(propertyID, user._id);
        toast.success("Property bought successfully!");
      } else {
        toast.error("Missing user ID or property ID");
      }
    } catch (error) {
      console.error("Failed to buy property:", error);
    }
  };

  return (
    <div className="MakePaymentSuccess">
      <div className="wrapper">
        <div className="container">
          <section className="step-wizard">
            <div id="detail-property">
              <h2>Property Type:  {data.propertyType}</h2>
              <h2>Name:  {data.title}</h2>
              <h2>Deposit:  RM{data.price}</h2>
              <h2>Seller:  {data.seller.username}</h2>
            </div>
          </section>

          <form action="">
            <div className="button-container">
              <input
                type="button"
                value={`Purchase ${data.title}`}
                className="submit-btn buy-property-btn"
                onClick={handleBuyProperty}
              />
              <input
                type="submit"
                value="Contact Seller"
                className="submit-btn contact-seller-btn"
              />
              <Link to="/homepage" id="home-button">
                <input
                  type="button"
                  value="Home"
                  className="submit-btn home-btn"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
