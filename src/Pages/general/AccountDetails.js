import "./AccountDetails.css";
import { useEffect, useState } from "react";
import { getUserById } from "../../util.js";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const MyAccountDetails = () => {
  const {id} = useParams();
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser()
  }, []);

  return (
    <div className="acc-grid-container">
      <div className="About">
            <div className="details-column">
                <div className="first-name">Username: {user ? user.username : null}</div>
                <h4 className="username">@hdjskdn</h4>
                <div className="type-of-user">Seller/Buyer</div>

                <div className="details">
                    Full Name:
                    <div className="full-name">{user ? `${user.firstName} ${user.lastName}` : null}</div>

                    <span className="location-desc"><FaLocationDot />Location: </span>
                    <div className="location">{user ? user.location : null}</div>

                    <span className="email-desc"><MdAlternateEmail />Email: </span>
                    <div className="email">{user ? user.email : null}</div>

                    <span className="phone-number-desc"><FaPhoneAlt />Phone Number:</span>
                    <div className="phone-number">{user ? user.phoneNumber : null}</div>
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
