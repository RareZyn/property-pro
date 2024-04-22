import "./MyAccountProperty.css";
import ItemComponentCard from "../Property/Property component/ItemComponentCard";
import image from "../../Res/image/image-dummy-house.png"
import { MyAccountHeader } from './MyAccountHeader';
import { Link } from "react-router-dom";
import { NavHeader } from "../Navigation/NavHeader";

export const MyAccountProperty = () => {
  let items=[];
  for(let i=0 ; i<10 ; i++){
    items.push(<ItemComponentCard imgLink={image}/>);
  }

  return (
    <div className="own-property-container">
      {items}

      <div className="MyAccountPropertyAdd">
        <Link to= "/publish-property">
        <button>
          <img 
            src={require("../../Res/image/add-icon.png")}
            alt="addicon"
            className="ButtonImage"/>
          <span>Add More Property</span>
        </button>
        </Link>
      </div>
      
    </div>
  );
};
