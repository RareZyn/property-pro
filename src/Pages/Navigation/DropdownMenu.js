import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../AppProvider";
import { getUser, logout } from "../../util";
import "./DropdownMenu.css";

export const DropdownMenu = ({ className }) => {
  const {userToken} = useContext(AppContext);
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
        <img
          className="ProfileView"
          src={require("../../Res/image/user profile.png")}
        />
        <h3 className="ProfileViewName">{user ? user.username : null}</h3>
        <p className="ProfileViewDesc">{user ? user.description : null}</p>
      </a>
      <ul className="DropdownMenuNavigation">
        <li className="DropdownMenuNavigationItem">
          <a href="/HomePage">
            <img
              src={require("../../Res/image/dropdownmenu-icons/house icon dropdownmenu.png")}
            />
            <h1>Home</h1>
          </a>
        </li>
        <DropdownMenuNavItem
          href="/manage-property"
          src={require("../../Res/image/dropdownmenu-icons/sell icon dropdownmenu.png")}
          itemName={"Sell Property"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/browser-property"
          src={require("../../Res/image/dropdownmenu-icons/find icon dropdownmenu.png")}
          itemName={"Find Property"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/chat"
          src={require("../../Res/image/dropdownmenu-icons/chat icon.png")}
          itemName={"Chat"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/ForumPages"
          src={require("../../Res/image/dropdownmenu-icons/find icon dropdownmenu.png")}
          itemName={"Community"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/saved-property"
          src={require("../../Res/image/dropdownmenu-icons/save icon.png")}
          itemName={"Saved Property"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/"
          src={require("../../Res/image/dropdownmenu-icons/logout icon.png")}
          itemName={"Logout"}
          onClick={logout}
        ></DropdownMenuNavItem>
      </ul>
    </div>
  );
};

const DropdownMenuNavItem = ({ href, src, itemName, onClick }) => {
  return (
    <li className="DropdownMenuNavigationItem" onClick={onClick}>
      <a href={href}>
        <img src={src} />
        <h1>{itemName}</h1>
      </a>
    </li>
  );
};
