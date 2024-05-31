// Guna styling AccountHeader.css

import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../AppProvider.js";
import { MyAccountProperty } from "./MyAccountProperty.js";
import { MyAccountPost } from "./MyAccountPost.js";
import { MyAccountDetails } from "./MyAccountDetails.js";
import { MyAccountTransaction } from "./MyAccountTransaction.js";
import { ManageAccount } from "./ManageAccount.js";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { getUserID } from '../../util.js';
import { Link, Outlet } from "react-router-dom";

export const MyAccountHeader = () => {
  // const { user } = useContext(AppContext);
  const[user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState("Property");
  let page;

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
