import "./MyAccountHeader.css";
import React, { useState } from 'react';

export const MyAccountHeader = ({name, bio, currentPage}) => {

  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="MyAccountHeader">
      <section className="flex" id="details-vah">
        <div >
           <img 
            id="user-image"
            src={require("../../Res/image/user profile.png")}
          />
        </div>
        <div className="MyAccountHeader-desc">
          <h1 style={{fontSize: "1.7em"}}>{name}</h1>
          <p style={{fontSize: "1.0em"}}>{bio}</p>

        </div>
        <a href="manage-account">
          <img
          src={require("../../Res/image/editicon.jpg")}
          /></a>

      </section>
      <hr />
      <section id="account-link-container">
        <a 
          className={`account-link ${selectedLink === 'property' ? 'selected-acc-link' : ''}`}
          onClick={() => handleLinkClick('property')}
          href="myaccount-property"
        >
          Property
        </a>
        <a 
          className={`account-link ${selectedLink === 'post' ? 'selected-acc-link' : ''}`}
          onClick={() => handleLinkClick('post')}
          href="myaccount-post"
        >
          Post
        </a>
        <a 
          className={`account-link ${selectedLink === 'transaction' ? 'selected-acc-link' : ''}`}
          onClick={() => handleLinkClick('transaction')}
          href="myaccount-transaction"
        >
          My Transaction
        </a>
        <a 
          className={`account-link ${selectedLink === 'details' ? 'selected-acc-link' : ''}`}
          onClick={() => handleLinkClick('details')}
          href="myaccount-details"
        >
          About
        </a>
      </section>
    </div>
  );
};
