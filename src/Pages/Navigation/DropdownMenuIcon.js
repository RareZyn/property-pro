import React from "react";
import "./DropdownMenuIcon.css"; // Add appropriate styles here

export const DropdownMenuIcon = ({ onClick, className }) => (
  <div className={`DropdownMenuIcon ${className}`} onClick={onClick}>
    &#9776; {/* Unicode character for hamburger menu */}
  </div>
);

// export const DropdownMenuIcon = ({onClick,className}) => {
//     return(
//         <div className="DropdownBase" onClick={onClick}>
//             <div className={className}></div>
//             <div className={className}></div>
//             <div className={className}></div>
//         </div>
//     )
// }
