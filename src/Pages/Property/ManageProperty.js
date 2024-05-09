import "./ManageProperty.css";
import backIcon from "../../Res/image/back-icon.png";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";
import { NavHeader } from "../Navigation/NavHeader";
import { Link } from "react-router-dom";

export const ManageProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 4; i++) {
    propertyCards.push(
      <PropertyDisplayCard link={"/property-details-overview"} />
    );
  }

  return (
    <div id="ManagePropertyPage">
      <div className="properties-grid">
        <h1 className="property-headline">Manage Property</h1>
        {propertyCards}
      </div>
      <Link to={"/publish-property"}>
        <button id="add-property-button">
          <img
            src={require("../../Res/image/add-icon.png")}
            alt="addicon"
            className="ButtonImage"
          />
          <span>Add More Property</span>
        </button>
      </Link>
    </div>
  );
};
