import "./MyAccountHeader.css";
import { ViewAccountProperty } from "../Property/ViewAccountProperty";
import { ViewAccountPost } from "../Property/ViewAccountPost";
import { ViewAccountAbout } from "../Property/ViewAccountAbout";
import profilePic from "../../Res/image/user profile.png";
import React, { useState } from "react";

export const MyAccountHeader = ({ name, bio /*currentPage*/ }) => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="MyAccountHeader">
      <section className="flex" id="details-vah">
        <img
          id="user-image"
          className="profile-image"
          src={require("../../Res/image/user profile.png")}
        />

        <div className="MyAccountHeader-desc">
          <h1 style={{ fontSize: "1.7em" }}>{name}</h1>
          <p style={{ fontSize: "1.0em" }}>{bio}</p>
        </div>
        <a href="manage-account">
          <img src={require("../../Res/image/editicon.jpg")} />
        </a>
      </section>
      <hr />
      <section id="account-link-container">
        <a
          className={`account-link ${
            selectedLink === "property" ? "selected-acc-link" : ""
          }`}
          onClick={() => handleLinkClick("property")}
          href="myaccount-property"
        >
          Property
        </a>
        <a
          className={`account-link ${
            selectedLink === "post" ? "selected-acc-link" : ""
          }`}
          onClick={() => handleLinkClick("post")}
          href="myaccount-post"
        >
          Post
        </a>
        <a
          className={`account-link ${
            selectedLink === "transaction" ? "selected-acc-link" : ""
          }`}
          onClick={() => handleLinkClick("transaction")}
          href="myaccount-transaction"
        >
          My Transaction
        </a>
        <a
          className={`account-link ${
            selectedLink === "details" ? "selected-acc-link" : ""
          }`}
          onClick={() => handleLinkClick("details")}
          href="myaccount-details"
        >
          About
        </a>
      </section>
    </div>
  );

  //Azim-code
  // const [currentPage, setCurrentPage] = useState("Property");
  // let page;

  // switch(currentPage){
  //   case "Property":
  //     page = <ViewAccountProperty />
  //     break;
  //   case "Post":
  //     page = <ViewAccountPost />
  //     break;
  //   case "About":
  //     page = <ViewAccountAbout />
  //     break;
  // }

  // return (
  //   <>
  //     <div className="ViewAccountHeader">
  //       <section className="flex" id="details-vah">
  //         <div id="pp-container">
  //           <img src={profilePic} alt="" srcset="" />
  //         </div>
  //         <div className="acc-desc">
  //           <h1 >{name}</h1>
  //           <span>{bio}</span>
  //         </div>
  //       </section>
  //       <hr />
  //       <section id="account-link-container">
  //         <a className={`account-link ${currentPage === "Property" ? "active" : ""}`} onClick={() => setCurrentPage("Property")}>Property</a>
  //         <a className={`account-link ${currentPage === "Post" ? "active" : ""}`} onClick={() => setCurrentPage("Post")}>Post</a>
  //         <a className={`account-link ${currentPage === "About" ? "active" : ""}`} onClick={() => setCurrentPage("My Transaction")}>My Transaction</a>
  //         <a className={`account-link ${currentPage === "About" ? "active" : ""}`} onClick={() => setCurrentPage("About")}>About</a>
  //       </section>
  //     </div>
  //     {page}
  //   </>
  // );
};
