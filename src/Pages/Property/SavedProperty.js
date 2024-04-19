import "./SavedProperty.css";
import { PropertyDisplayCard } from "./Browser component/PropertyDisplayCard";
import backIcon from "../../Res/image/back-icon.png"
import { Link } from "react-router-dom";

export const SavedProperty = () => {
  return (
    <div className="SavedProperty">
      <div id="title">
        {/* <Link><img id="back-button" src={backIcon} alt="" srcset="" /></Link> */}
        <h1 >Saved Property</h1>
      </div>
      <div className="Properties-grid">
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
        <PropertyDisplayCard />
      </div>
    </div>
  );
};
