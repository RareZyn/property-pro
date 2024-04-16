import { DropdownMenu } from "./DropdownMenu";
import "./NavHeader.css";

export const NavHeader = () => {
  return (
    <div className="NavHeader">
      <DropdownMenu></DropdownMenu>
      <h1 className="NavTitle">Navigation Bar yang sebenar</h1>
    </div>
  );
};
