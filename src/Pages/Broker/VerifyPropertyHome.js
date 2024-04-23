import { Link } from "react-router-dom";
import "./VerifyPropertyHome.css";
import { PropertyDisplayCard } from "../../Cards/Property Cards/PropertyDisplayCard";

export const VerifyPropertyHome = () => {
  let newPropertyToVerify = [];
  for (let i = 0; i < 5; i++) {
    newPropertyToVerify.push(<PropertyDisplayCard link={"/verify-property"} />);
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
