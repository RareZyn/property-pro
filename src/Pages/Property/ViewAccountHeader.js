import "./ViewAccountHeader.css";
import { useState } from "react";
import {ViewAccountProperty} from "./ViewAccountProperty";
import {ViewAccountPost} from "./ViewAccountPost";
import {ViewAccountAbout} from "./ViewAccountAbout";

export const ViewAccountHeader = ({name, bio}) => {
  const [currentPage, setCurrentPage] = useState("Property");
  let page;

  switch(currentPage){
    case "Property":
      page = <ViewAccountProperty />
      break;
    case "Post":
      page = <ViewAccountPost />
      break;
    case "About":
      page = <ViewAccountAbout />
      break;
  }

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <div id="pp-container" className="ProfilePicture"></div>
          <div className="acc-desc">
            <h1 >{name}</h1>
            <span>{bio}</span>
          </div>
        </section>
        <hr />
        <section id="account-link-container">
          <a className={`account-link ${currentPage === "Property" ? "active" : ""}`} onClick={() => setCurrentPage("Property")}>Property</a>
          <a className={`account-link ${currentPage === "Post" ? "active" : ""}`} onClick={() => setCurrentPage("Post")}>Post</a>
          <a className={`account-link ${currentPage === "About" ? "active" : ""}`} onClick={() => setCurrentPage("About")}>About</a>
        </section>
      </div>
      {page}
    </>
  );
};
