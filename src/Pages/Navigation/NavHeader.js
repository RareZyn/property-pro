import React,{useState} from 'react'
import { DropdownMenuIcon } from "./DropdownMenuIcon.js";
import { DropdownMenu } from './DropdownMenu.js';
import "./NavHeader.css";
import { ChatPopup } from '../Social/ChatPopup.js';

export const NavHeader = () => {

  const [burger_icon, setBurgerIcon] = useState("DropdownBar unclicked");
  const [dropdownMenu, setDropdownMenu] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const showMenu = () =>{
    if(isMenuClicked){
      setBurgerIcon("DropdownBar clicked");
      setDropdownMenu("menu visible");
    } else{
      setBurgerIcon("DropdownBar uncliked");
      setDropdownMenu('menu hidden');
    }
    setIsMenuClicked(!isMenuClicked)
  };

  return (
    <div className="NavHeader">
      <DropdownMenuIcon onClick={showMenu} className={burger_icon}></DropdownMenuIcon>
      <a href='/' className="NavTitle">PropertyPro</a>
      <DropdownMenu className={dropdownMenu}></DropdownMenu>
      <nav className='NavigatorRightHeader'>
      <ul>
      <CustomLink href="/">Home</CustomLink>
        <CustomLink href="/browser-property">Browser</CustomLink>
        <CustomLink href="/publish-property">Sell</CustomLink>
        <li className='Navigator'>Chat</li>
        <CustomLink href="/forum-page">Community</CustomLink>
        <CustomLink href="/register-broker">Broker</CustomLink>

        <CustomLink href="/launch">Logout</CustomLink>
      </ul>
      </nav>
      <ChatPopup></ChatPopup>
    </div>
  );
};

function CustomLink({href,children,...props}){
  const path = window.location.pathname;

  return(
    <li className={path===href? "active" : ""}>
      <a className='Navigator' href={href} {...props}>{children}</a>
    </li>
  );
}
