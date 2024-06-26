import "./NavHeader.css";
import React, { useState, useEffect, useContext } from "react";
import { DropdownMenuIcon } from "./DropdownMenuIcon";
import { DropdownMenu } from "./DropdownMenu";
import { ChatPopup } from "../Social/ChatPopup";
import { Link, useLocation } from "react-router-dom";
import { getUser, logout } from "../../utils/userAPI";
import { UserContext } from "../../context/UserContext";

export const NavHeader = () => {
  const { userToken } = useContext(UserContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUser(userToken);
        setUser(userData);
      } catch (error) {
        // Handle the error appropriately in your UI
        console.error("Failed to fetch user data:", error);
      }
    };

    if (userToken) {
      fetchUser();
    } else {
      console.log("No user token");
    }
  }, [userToken]);

  const [burgerIcon, setBurgerIcon] = useState("DropdownBar unclicked");
  const [dropdownMenu, setDropdownMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  /*const [isChatClicked, setIsChatClicked] = useState(false);*/
  const [chatPopdown] = useState("ChatPopup hidden");
  /*const [chatNavigation, setChatNavigation] = useState("Navigator");*/

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setDropdownMenu("menu hidden");
        setBurgerIcon("DropdownBar unclicked");
        setIsMenuClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setDropdownMenu("menu hidden");
    setBurgerIcon("DropdownBar unclicked");
    setIsMenuClicked(false);
  }, [location]);

  const showMenu = () => {
    if (isMenuClicked) {
      setBurgerIcon("DropdownBar unclicked");
      setDropdownMenu("menu hidden");
    } else {
      setBurgerIcon("DropdownBar clicked");
      setDropdownMenu("menu visible");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const brokerCheck = () => {
    return user?.brokerID ? "/verify-property-homepage" : "/register-broker";
  };

  const getBrokerButtonClass = () => {
    return user?.brokerID
      ? "navHeader-broker-button-animated"
      : "navHeader-broker-button";
  };

  return (
    <div className="NavHeader">
      <div className="left-header">
        <DropdownMenuIcon onClick={showMenu} className={burgerIcon} />
        <Link to="/HomePage" className="NavTitle">
          PropertyPro
        </Link>
      </div>
      <DropdownMenu
        className={dropdownMenu}
        setDropdownMenu={setDropdownMenu}
      />
      <nav className="NavigatorRightHeader">
        <ul>
          <CustomLink href="/HomePage" defaultActive>
            Home
          </CustomLink>
          <CustomLink href="/browser-property">Browser</CustomLink>
          <CustomLink href="/manage-property">Sell</CustomLink>
          <CustomLink href="/chat">Chat</CustomLink>
          <CustomLink href="/forum-page">Community</CustomLink>
          <CustomLink id={getBrokerButtonClass()} href={brokerCheck()}>Broker</CustomLink>
          <CustomLink
            href={userToken ? `/view-account/${userToken.id}/property` : null}
          >
            My Account
          </CustomLink>
          <CustomLink href="/saved-property">Saved Property</CustomLink>
          <CustomLink href="/" onClick={logout}>
            Logout
          </CustomLink>
        </ul>
      </nav>
      <ChatPopup className={chatPopdown}></ChatPopup>
    </div>
  );
};

function CustomLink({ href, children, defaultActive, onClick, ...props }) {
  const location = useLocation();
  const isActive = defaultActive
    ? location.pathname === href || location.pathname === "/"
    : location.pathname === href;

  return (
    <li className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
      <Link
        className={`Navigator ${isActive ? "active" : ""}`}
        to={href}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
}
