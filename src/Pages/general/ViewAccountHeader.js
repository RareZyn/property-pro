import "./AccountHeader.css";
import { useState, useContext} from "react";
import {ViewAccountProperty} from "./ViewAccountProperty";
import {ViewAccountPost} from "./ViewAccountPost";
import {ViewAccountAbout} from "./ViewAccountAbout";
import profilePic from "../../Res/image/user profile.png"
import { AppContext } from "../../App";

export const ViewAccountHeader = ({ name, bio }) => {
  const [currentPage, setCurrentPage] = useState("Property");
  let page;
  const { userDetails } = useContext(AppContext);

  switch (currentPage) {
    case "Property":
      page = <ViewAccountProperty />;
      break;
    case "Post":
      page = <ViewAccountPost />;
      break;
    case "About":
      page = <ViewAccountAbout />;
      break;
  }

  return (
    <>
      <div className="ViewAccountHeader">
        <section className="flex" id="details-vah">
          <div id="pp-container">
            <img src={profilePic} alt="" srcset="" />
          </div>
          <div className="acc-desc">
            <h1 >{userDetails.username}</h1>
            <span>{userDetails.bio}</span>
          </div>
        </section>
        <hr />
        <section id="account-link-container">
          <a
            className={`account-link ${
              currentPage === "Property" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("Property")}
          >
            Property
          </a>
          <a
            className={`account-link ${currentPage === "Post" ? "active" : ""}`}
            onClick={() => setCurrentPage("Post")}
          >
            Post
          </a>
          <a
            className={`account-link ${
              currentPage === "About" ? "active" : ""
            }`}
            onClick={() => setCurrentPage("About")}
          >
            About
          </a>
        </section>
      </div>
      {page}
    </>
  );
};
