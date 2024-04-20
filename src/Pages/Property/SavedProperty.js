import "./SavedProperty.css";
import { PropertyDisplayCard } from "./Property component/PropertyDisplayCard";
import backIcon from "../../Res/image/back-icon.png"
import { Link } from "react-router-dom";

export const SavedProperty = () => {
  const propertyCards = [];
  let color = 0;

  for (let i = 0; i < 8; i++) {
    color = i - (6 * parseInt(i/6));
    console.log(color);
    switch(color){
      case 0:
        propertyCards.push(<PropertyDisplayCard color={"#F49F1F"}/>);
        break;
      case 1:
        propertyCards.push(<PropertyDisplayCard color={"#27A088"}/>);
        break;
      case 2:
        propertyCards.push(<PropertyDisplayCard color={"#2B3D50"}/>);
        break;
      case 3:
        propertyCards.push(<PropertyDisplayCard color={"#868686"}/>);
        break;
      case 4:
        propertyCards.push(<PropertyDisplayCard color={"#27A088"}/>);
        break;
      case 5:
        propertyCards.push(<PropertyDisplayCard color={"#6BEAD3"}/>);
        break;
    }
  }

  return (
    <div className="SavedProperty">
      <div id="title">
        <img src={backIcon} alt="" srcset="" />
        <h1>Saved Property</h1>
      </div>
      <div className="Properties-grid">
        {propertyCards}
      </div>
    </div>
  );
};
