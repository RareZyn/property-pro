import "./MyAccountProperty.css";
import ItemComponentCard from "../../Cards/Property Cards/ItemComponentCard";
import image from "../../Res/image/image-dummy-house.png"
import { Link } from "react-router-dom";

export const MyAccountProperty = () => {
  let items = new Array(10).fill(image);
  console.log(items)

  return (
    <div className="own-property-container">
      {items.map((item, index) => (
        <ItemComponentCard key={index} imgLink={item}/>
      ))}

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
