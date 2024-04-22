import "./MyAccountHeader.css";
import React, { useState, useContext } from "react";
import { AppContext } from "../../App.js";

export const MyAccountHeader = () => {
  const { userDetails } = useContext(AppContext);
  const [selectedLink, setSelectedLink] = useState("property"); // Set initial selected link

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="MyAccountHeader">
      <section className="flex" id="details-vah">
        <img
          id="user-image-9902"
          className="profile-image"
          src={require("../../Res/image/user profile.png")}
          alt="User profile"
        />
        <div className="MyAccountHeader-desc">
          <h1 style={{ fontSize: "1.7em" }}>{userDetails.username}</h1>
          <p style={{ fontSize: "1.0em" }}>{userDetails.bio}</p>
        </div>
        <div className="editButton">
          <a href="manage-account">
            <img
              src={require("../../Res/image/editicon.jpg")}
              alt="Edit icon"
            />
          </a>
        </div>
      </section>

      <section id="account-link-container">
        <div id="section">
          <a
            className={`account-link ${
              selectedLink === "property" ? "selected-acc-link" : ""
            }`}
            onClick={() => handleLinkClick("property")}
            href="myaccount-property"
          >
            Property
          </a>
        </div>
        <div id="section">
          <a
            className={`account-link ${
              selectedLink === "post" ? "selected-acc-link" : ""
            }`}
            onClick={() => handleLinkClick("post")}
            href="myaccount-post"
          >
            Post
          </a>
        </div>
        <div id="section">
          <a
            className={`account-link ${
              selectedLink === "transaction" ? "selected-acc-link" : ""
            }`}
            onClick={() => handleLinkClick("transaction")}
            href="myaccount-transaction"
          >
            My Transaction
          </a>
        </div>
        <div id="section">
          <a
            className={`account-link ${
              selectedLink === "details" ? "selected-acc-link" : ""
            }`}
            onClick={() => handleLinkClick("details")}
            href="myaccount-details"
          >
            About
          </a>
        </div>
      </section>
    </div>
  );
};
