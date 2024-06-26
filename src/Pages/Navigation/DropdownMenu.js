import { useContext, useEffect, useState } from "react";
import { getUser, logout } from "../../utils/userAPI";
import "./DropdownMenu.css";
import { UserContext } from "../../context/UserContext";
import ProfilePicture from "../../Cards/Image Placeholder/ProfilePicture";

export const DropdownMenu = ({ className }) => {
  const {userToken} = useContext(UserContext);
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
    <div className={className}>
      <a className="ProfileViewDetailsCard" href={userToken ? `/view-account/${userToken.id}` : null}>
        <ProfilePicture imgLink={user ? user.profilePicture : null} size='85px'/>
        <h3 className="ProfileViewName">{user ? user.username : null}</h3>
        <p className="ProfileViewDesc">{user ? user.description : null}</p>
      </a>

      <a href="/homepage">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/house icon dropdownmenu.png")}/>
            <h1>Home</h1>
          </div>
      </a>
      <a href="/manage-property">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/sell icon dropdownmenu.png")}/>
            <h1> Sell Property</h1>
          </div>
      </a>
      <a href="/browser-property">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/find icon dropdownmenu.png")}/>
            <h1>Find Property</h1>
          </div>
      </a>
      <a href="/chat">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/chat icon.png")}/>
            <h1>Chat</h1>
          </div>
      </a>
      <a href="/forum-page">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/community icon.png")}/>
            <h1>Community</h1>
          </div>
      </a>
      <a href="/homepage">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/save icon.png")}/>
            <h1>Saved Property</h1>
          </div>
      </a>
      <a href="/">
      <div id="menudiv">
            <img src={require("../../Res/image/dropdownmenu-icons/logout icon.png")}/>
            <h1>Log Out</h1>
          </div>
      </a></div>
           
  );
};
