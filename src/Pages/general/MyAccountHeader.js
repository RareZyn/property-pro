// Guna styling AccountHeader.css

import React, { useState, useContext } from "react";
import { AppContext } from "../../App.js";
import { MyAccountProperty } from "./MyAccountProperty.js";
import { MyAccountPost } from "./MyAccountPost.js";
import { MyAccountDetails } from "./MyAccountDetails.js";
import { MyAccountTransaction } from "./MyAccountTransaction.js";
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader.js";
import { ProfilePicture } from "../../Cards/General Cards/ProfilePictureContainer.jsx";
import { ManageAccount } from "./ManageAccount.js";

export const MyAccountHeader = () => {
  const { userDetails } = useContext(AppContext);
  const [selectedLink, setSelectedLink] = useState("property"); // Set initial selected link

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const [currentPage, setCurrentPage] = useState("Property");
  let page;

  switch (currentPage) {
    case "Property":
      page = <MyAccountProperty />;
      break;
    case "Post":
      page = <MyAccountPost />;
      break;
    case "My Transaction":
      page = <MyAccountTransaction />;
      break;
    case "About":
      page = <MyAccountDetails />;
      break;    
    case "Manage Account":
      page = <ManageAccount />;
      break;
  }

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <div id="pp-container">
            <img
              src={require("../../Res/image/user profile.png")}
              alt=""
              srcset=""
            />
          </div>
          {/* <ProfilePicture imxgSrc={require("../../Res/image/user-image.png")} size={"10%"}/> */}
          <div className="acc-desc">
            <h1>{userDetails.username}</h1>
            <span>{userDetails.bio}</span>
          </div>
          
          <a id="edit-account" onClick={() => setCurrentPage("Manage Account")}>
            <img
              src={require("../../Res/image/editicon.jpg")}
              alt="Edit icon"
            />
          </a>
        </section>
        <hr />
        <section id="account-link-container">
          <a
            className={`account-link ${
              currentPage === "Property" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("Property")}
          >
            Property
          </a>
          <a
            className={`account-link ${currentPage === "Post" ? "active" : ""}`}
            onClick={() => setCurrentPage("Post")}
          >
            Post
          </a>
          <a
            className={`account-link ${
              currentPage === "My Transaction" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("My Transaction")}
          >
            My Transaction
          </a>
          <a
            className={`account-link ${
              currentPage === "About" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("About")}
          >
            About
          </a>
        </section>
      </div>
      {page}
    </>
  );
};
