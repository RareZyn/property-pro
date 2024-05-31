import "./MyAccountProperty.css";
import HouseComponentCard from "../../Cards/Property Cards/HouseComponentCard";
import image from "../../Res/image/image-dummy-house.png"
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export const MyAccountProperty = () => {
  let items = new Array(4).fill(image);

  return (
    <div className="own-property-container">
      <div className="myproperty-add">
        <Link to= "/publish-property">
          <button>
            {/*<img 
              src={require("../../Res/image/add-icon.png")}
              alt="addicon"
            className="ButtonImage"/>*/}
            <IoAddCircleOutline className="add-icon"/>
            <span>Add More Property</span>
          </button>
        </Link>
      </div>

      <div className="myproperty-div">
        {items.map((item, index) => (
            <HouseComponentCard key={index} imgLink={item} link={"/property-house-details"}/>
        ))}  
      </div>
              
    </div>
  );
};
