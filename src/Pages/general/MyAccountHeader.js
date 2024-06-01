// Guna styling AccountHeader.css

import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider.js";
import { Link, Outlet } from "react-router-dom";
import { getUser } from "../../util.js";

export const MyAccountHeader = () => {
  const { userToken } = useContext(AppContext);
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

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <div id="pp-container">
            <img
              src={require("../../Res/image/user profile.png")}
              alt=""
            />
          </div>
          {/* <ProfilePicture imxgSrc={require("../../Res/image/user-image.png")} size={"10%"}/> */}
          <div className = "acc-desc">
            <h1>{(user === null) ? null : `${user.firstName} ${user.lastName}`}</h1>
            <span>{(user === null) ? 'null' : user.description}</span>
          </div>
          
          <Link id="edit-account" to={'manage'}>
            <img
              src={require("../../Res/image/editicon.jpg")}
              alt="Edit icon"
            />
          </Link>
        </section>
        <hr />
        <section id="account-link-container">
          <Link className="account-link" to={'property'}>Property</Link>
          <Link className="account-link" to={'post'}>Post</Link>
          <Link className="account-link" to={'transaction'}>My Transaction</Link>
          <Link className="account-link" to={'about'}>About</Link>
        </section>
      </div>
      <Outlet />
    </>
  );
};
