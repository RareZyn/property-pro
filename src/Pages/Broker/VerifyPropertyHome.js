//import { Link } from "react-router-dom";
import "../Property/GeneralProperty.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";

export const VerifyPropertyHome = () => {
  let newPropertyToVerify = [];
  for (let i = 0; i < 5; i++) {
    newPropertyToVerify.push(<HouseDisplayCard link={"/verify-property-house"} />);
  }

  return (
    <div className="VerifyPropertyHome">
      <div className="property-browse-div">
        <div className="property-headline">New Published Property</div>
        <div className="properties-grid">
          {newPropertyToVerify}
        </div>
      </div>
    </div>
  );
};
