import { NavHeader } from "../Navigation/NavHeader";
import "./MyAccountDetails.css";
import { MyAccountHeader } from "./MyAccountHeader";
import { AppContext } from "../../AppProvider.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';

export const MyAccountDetails = () => {
  const[user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get('token');
        if (!token) throw new Error('No token found');
        const userCookie = jwtDecode(token).userData;
        const res = await axios.get(`http://localhost:5000/users/get/${userCookie._id}`, { withCredentials: true });
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    getUser()
  }, []);

  return (
    <div className="acc-grid-container">
      <div className="About">
            <div className="details-column">
                <div className="first-name">Username: {(user !== null) ? user.username : null}</div>
                <div className="type-of-user">Seller/Buyer</div>

                <div className="details">
                    Full Name:
                    <div className="full-name">{(user === null) ? null : user.firstName + " " +user.lastName}</div>

                    Age:
                    <div className="age">{(user === null) ? null : user.age}</div>

                    Location:
                    <div className="location">{(user !== null) ? user.location : null}</div>

                    Email:
                    <div className="email">{(user !== null) ? user.email : null}</div>

                    Phone Number:
                    <div className="phone-number">{(user !== null) ? user.phoneNumber : null}</div>
                </div>
            </div>

            <div className="about-badges-column">
                <div className="about-section">
                    <div className="about">About me:</div>
                    <p className="about-desc">
                      {(user === null) ? null : user.description}
                    </p>
                </div>
                <div className="badges-section">
                    <div className="property-listed-badge">
                        <div className="noOf-property-listed">5</div>
                        Property Listed
                    </div>
                    <div className="sold-property-badge">
                        <div className="noOf-sold-propety">2</div> 
                        Sold Property
                    </div>
                    <div className="property-purchased-badge">
                        <div className="noOf-property-purchased">0</div>
                        Property Purchased
                    </div>
                </div>
            </div>
        </div>

      {/*<div className="MyAccountDetailsCard">
        <div className="MyAccountDetailsItem">
          <img src={require("../../Res/image/phoneicon.png")} alt="phone" />
          <p>Phone Number: 0139874690</p>
        </div>
        <div className="MyAccountDetailsItem">
          <img src={require("../../Res/image/houseicon.png")} alt="addres" />
          <p>
            Address: 825, Lingkungan Budi, 50603 Kuala Lumpur, Wilayah
            Persekutuan Kuala Lumpur
          </p>
        </div>
        <div className="MyAccountDetailsItem">
          <img src={require("../../Res/image/emailicon.png")} alt="email" />
          <p>Email: universitymalaya@property.com</p>
        </div>
      </div>*/}
    </div>
  );
};
