import { useContext } from "react";
import { AppContext } from "../../AppProvider";
import "./DropdownMenu.css";

export const DropdownMenu = ({ className }) => {
  const {user} = useContext(AppContext);
  // const user = null;
  let fullName = null;

  if(user !== null){
    fullName = `${user.firstName} ${user.lastName}`
  }

  return (
    <div className={className}>
      <a className="ProfileViewDetailsCard" href="/myaccount">
        <img
          className="ProfileView"
          src={require("../../Res/image/user profile.png")}
        />
        <h3 className="ProfileViewName">{fullName}</h3>
        <p className="ProfileViewDesc">Bla bla bla</p>
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
          href="/publish-property"
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
          href="/saved-property"
          src={require("../../Res/image/dropdownmenu-icons/save icon.png")}
          itemName={"Saved Property"}
        ></DropdownMenuNavItem>
        <DropdownMenuNavItem
          href="/"
          src={require("../../Res/image/dropdownmenu-icons/logout icon.png")}
          itemName={"Logout"}
        ></DropdownMenuNavItem>
      </ul>
    </div>
  );
};

const DropdownMenuNavItem = ({ href, src, itemName }) => {
  return (
    <li className="DropdownMenuNavigationItem">
      <a href={href}>
        <img src={src} />
        <h1>{itemName}</h1>
      </a>
    </li>
  );
};
