import { NavHeader } from "../Navigation/NavHeader";
import "./MyAccountDetails.css";
import { MyAccountHeader } from "./MyAccountHeader";
import { AppContext } from "../../App.js";
import { useContext } from "react";

export const MyAccountDetails = () => {
  const { userDetails } = useContext(AppContext);

  return (
    <div className="acc-grid-container">
      <div className="About">
            <div className="details-column">
                <div className="first-name">First Name</div>
                <div className="type-of-user">Seller/Buyer</div>

                <div className="details">
                    Full Name:
                    <div className="full-name">{userDetails.username}</div>

                    Age:
                    <div className="age">{userDetails.age}</div>

                    Location:
                    <div className="location">{userDetails.location}</div>

                    Email:
                    <div className="email">{userDetails.email}</div>

                    Phone Number:
                    <div className="phone-number">{userDetails.phoneNum}</div>
                </div>
            </div>

            <div className="about-badges-column">
                <div className="about-section">
                    <div className="about">About me:</div>
                    <p className="about-desc">
                      {userDetails.bio}
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
