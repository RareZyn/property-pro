import { DropdownMenu } from "./DropdownMenu"
import React from "react";
import "./DropdownMenuIcon.css"

export const DropdownMenuIcon = ({onClick,className}) => {
    return(
        <div className="DropdownBase" onClick={onClick}>
            <div className={className}></div>
            <div className={className}></div>
            <div className={className}></div>
        </div>
    )
}