import React,{useState} from 'react'
import { DropdownMenuIcon } from "./DropdownMenuIcon.js";
import { DropdownMenu } from './DropdownMenu.js';
import "./NavHeader.css";

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
      <h1 className="NavTitle">PropertyPro</h1>
      <DropdownMenu className={dropdownMenu}></DropdownMenu>
    </div>
  );
};
