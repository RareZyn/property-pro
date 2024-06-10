import "./AccountHeader.css";
import React, { useState, useEffect, useContext } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { getUserById, getToken } from "../../utils/userAPI";
import { UserContext } from "../../context/UserContext.js";
import ProfilePicture from "../../Cards/Image Placeholder/ProfilePicture.js";
import { PuffLoader } from "react-spinners";


export const AccountHeader = () => {
  const {id} = useParams();
  const { userToken } = useContext(UserContext);
  const [owner, setOwner] = useState(true);
  const[user, setUser] = useState(null);
  const[loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById(id);
        console.log('user fetched in AccountHeader.js:', userData)
        setUser(userData);
        
        if (userToken.id === id){
          setOwner(true);
        }
        else{
          setOwner(false);
        }

        setLoading(false);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error('Failed to fetch user data:', error);
        setLoading(false)
      }
    };

    setLoading(true);
    fetchUser()
  }, [userToken]);
  // if (loading) {
  //   return (
  //     <div className="loaderContainer">
  //       <PuffLoader />
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <ProfilePicture imgLink={user ? user.profilePicture : null}/>
          <div className = "acc-desc">
            <h1>{user ? `${user.firstName} ${user.lastName}` : null}</h1>
            <span>{user ? user.description : null}</span>
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
