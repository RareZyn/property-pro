import "./MyAccountHeader.css";
import React, { useState, useContext } from "react";
import { AppContext } from "../../App.js";
import { MyAccountProperty } from "./MyAccountProperty.js";
import { MyAccountPost } from "./MyAccountPost.js";
import { MyAccountDetails } from "./MyAccountDetails.js";
import { MyAccountTransaction } from "./MyAccountTransaction.js";
import { NavHeader } from "../Navigation/NavHeader.js";
import { ProfilePicture } from "../../Components/ProfilePictureContainer.jsx";

export const MyAccountHeader = () => {
  const { userDetails } = useContext(AppContext);
  const [selectedLink, setSelectedLink] = useState("property"); // Set initial selected link

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  const [currentPage, setCurrentPage] = useState("Property");
  let page;

  switch(currentPage){
    case "Property":
      page = <MyAccountProperty />
      break;
    case "Post":
      page = <MyAccountPost />
      break;
    case "My Transaction":
      page = <MyAccountTransaction />
      break;
      case "About":
        page = <MyAccountDetails />
        break;
  }

  return (
    // <div className="ViewAccountHeader">
    //   <section className="flex" id="details-vah">
    //     <img
    //       id="user-image-9902"
    //       className="profile-image"
    //       src={require("../../Res/image/user profile.png")}
    //       alt="User profile"
    //     />
    //     <div className="MyAccountHeader-desc">
    //       <h1 style={{ fontSize: "1.7em" }}>{userDetails.username}</h1>
    //       <p style={{ fontSize: "1.0em" }}>{userDetails.bio}</p>
    //     </div>
    //     <div className="editButton">
    //       <a href="manage-account">
    //         <img
    //           src={require("../../Res/image/editicon.jpg")}
    //           alt="Edit icon"
    //         />
    //       </a>
    //     </div>
    //   </section>

    //   <section id="account-link-container">
    //     <div id="section">
    //       <a
    //         className={`account-link ${
    //           selectedLink === "property" ? "selected-acc-link" : ""
    //         }`}
    //         onClick={() => handleLinkClick("property")}
    //         href="myaccount-property"
    //       >
    //         Property
    //       </a>
    //     </div>
    //     <div id="section">
    //       <a
    //         className={`account-link ${
    //           selectedLink === "post" ? "selected-acc-link" : ""
    //         }`}
    //         onClick={() => handleLinkClick("post")}
    //         href="myaccount-post"
    //       >
    //         Post
    //       </a>
    //     </div>
    //     <div id="section">
    //       <a
    //         className={`account-link ${
    //           selectedLink === "transaction" ? "selected-acc-link" : ""
    //         }`}
    //         onClick={() => handleLinkClick("transaction")}
    //         href="myaccount-transaction"
    //       >
    //         My Transaction
    //       </a>
    //     </div>
    //     <div id="section">
    //       <a
    //         className={`account-link ${
    //           selectedLink === "details" ? "selected-acc-link" : ""
    //         }`}
    //         onClick={() => handleLinkClick("details")}
    //         href="myaccount-details"
    //       >
    //         About
    //       </a>
    //     </div>
    //   </section>
    // </div>
    <>
    <NavHeader/>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <div id="pp-container">
            <img src={require("../../Res/image/user profile.png")} alt="" srcset="" />
          </div>
          {/* <ProfilePicture imxgSrc={require("../../Res/image/user-image.png")} size={"10%"}/> */}
          <div className="acc-desc">
            <h1 >{userDetails.username}</h1>
            <span>{userDetails.bio}</span>
          </div>
          <a href="manage-account" id="edit-account">
            <img src={require("../../Res/image/edit-icon.png")} alt="Edit icon"/>
          </a>
        </section>
        <hr />
        <section id="account-link-container">
          <a className={`account-link ${currentPage === "Property" ? "active" : ""}`} onClick={() => setCurrentPage("Property")}>Property</a>
          <a className={`account-link ${currentPage === "Post" ? "active" : ""}`} onClick={() => setCurrentPage("Post")}>Post</a>
          <a className={`account-link ${currentPage === "My Transaction" ? "active" : ""}`} onClick={() => setCurrentPage("My Transaction")}>My Transaction</a>
          <a className={`account-link ${currentPage === "About" ? "active" : ""}`} onClick={() => setCurrentPage("About")}>About</a>
        </section>
      </div>
      {page}
    </>
  );
};
