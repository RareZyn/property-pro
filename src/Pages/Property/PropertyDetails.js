import "./PropertyDetails.css";
import { MyAccountHeader } from "../general/MyAccountHeader";
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader";
export const PropertyDetails = () => {
  //do a function onClick for saved icon
  //if click saved icon, will create a new propertydisplaycard
  //and display it at SavedProperty page

  return (
    <div className="PropertyDetails">
      <div className="property-image-div">
        <img
          id="property-image"
          src={require("../../Res/image/image-dummy-house.png")}
        />
      </div>
      <div className="property-display-card">
        <div className="MoreThumbnailsProperty">
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
          <img src={require("../../Res/image/image icon.png")} />
        </div>

        <h1>Item Title</h1>
        <p>Bla bla bla bla bla</p>
      </div>
    </div>
  );
};
