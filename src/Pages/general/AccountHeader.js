import "./AccountHeader.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getUserById } from "../../utils/userAPI";
import { UserContext } from "../../context/UserContext.js";
import ProfilePicture from "../../Cards/Image Placeholder/ProfilePicture.js";


export const AccountHeader = () => {
  const {id} = useParams();
  const { userToken } = useContext(UserContext);
  const [owner, setOwner] = useState(true);
  const[user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        setUser(userData);
        
        if (userToken.id === id){
          setOwner(true);
        }
        else{
          setOwner(false);
        }
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchUser()
  }, [user]);

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <ProfilePicture imgLink={user ? user.profilePicture : null}/>
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
          {owner && <Link className="account-link" to={'transaction'}>My Transaction</Link>}
          {true && <Link className="account-link" to={'about'}>About</Link>}          
        </section>
      </div>
      <Outlet />
    </>
  );
};
