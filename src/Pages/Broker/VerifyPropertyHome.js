import { Link } from "react-router-dom";
import "./VerifyPropertyHome.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";

export const VerifyPropertyHome = () => {
  let newPropertyToVerify = [];
  for (let i = 0; i < 5; i++) {
    newPropertyToVerify.push(<HouseDisplayCard link={"/verify-property"} />);
  }

  return (
    <div className="VerifyPropertyHome">
      <div className="properties-grid">
        <h1 className="property-headline">New Published Property</h1>
        {newPropertyToVerify}
      </div>
    </div>
  );
};
