import React, { useState } from "react";
import { DropdownMenuIcon } from "./DropdownMenuIcon.js";
import { DropdownMenu } from "./DropdownMenu.js";
import "./NavHeader.css";
import { ChatPopup } from "../Social/ChatPopup.js";
import { Link } from "react-router-dom";

export const NavHeader = () => {
  const [burger_icon, setBurgerIcon] = useState("DropdownBar unclicked");
  const [dropdownMenu, setDropdownMenu] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(true);

  const [isChatClicked, setIsChatClicked] = useState(true);
  const [chatPopdown, setChatPopdown] = useState("ChatPopup hidden");
  const [chatNavigation, setChatNavigation] = useState("Navigator");

  const [isBrokerLogin, setIsBrokerLogin] = useState(true);
  const [brokerBottom, setBrokerBottom] = useState("-hiddenBorder");

  const showMenu = () => {
    if (isMenuClicked) {
      setBurgerIcon("DropdownBar clicked");
      setDropdownMenu("menu visible");
    } else {
      setBurgerIcon("DropdownBar uncliked");
      setDropdownMenu("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  /*const showChat = () => {
    if (isChatClicked) {
      setChatPopdown("ChatPopup2");
      setChatNavigation("active");
    } else {
      setChatPopdown("ChatPopup2 hidden");
      setChatNavigation("Navigator");
    }
    setIsChatClicked(!isChatClicked);
  };*/

  return (
    <div className="NavHeader">
      <div id="dropdown-and-title">
        <DropdownMenuIcon
          onClick={showMenu}
          className={burger_icon}
        ></DropdownMenuIcon>
        <Link to={"/HomePage"} className="NavTitle">
          PropertyPro
        </Link>
      </div>
      <DropdownMenu className={dropdownMenu}></DropdownMenu>
      <nav className="NavigatorRightHeader">
        <ul>
          <CustomLink href="/HomePage">Home</CustomLink>
          <CustomLink href="/browser-property">Browser</CustomLink>
          <CustomLink href="/manage-property">Sell</CustomLink>
          <CustomLink href="/chat">Chat</CustomLink>
          <CustomLink href="/forum-page">Community</CustomLink>
          <CustomLink id="navHeader-broker-button" href="/register-broker">Broker</CustomLink>

          <CustomLink href="/" onClick={{}}>Logout</CustomLink>
        </ul>
      </nav>
      <ChatPopup className={chatPopdown}></ChatPopup>
    </div>
  );
};

function CustomLink({ href, children, onClick, ...props}) {
  const path = window.location.pathname;

  return (
    <li className={path === href ? "active" : ""} onClick={onClick}>
      <a className="Navigator" href={href} {...props}>
        {children}
      </a>
    </li>
  );
}
