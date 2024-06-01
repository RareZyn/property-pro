import "./MyAccountProperty.css";
import HouseComponentCard from "../../Cards/Property Cards/HouseComponentCard";
import LandComponentCard from "../../Cards/Property Cards/LandComponentCard";
import VehicleComponentCard from "../../Cards/Property Cards/VehicleComponentCard";
import image from "../../Res/image/image-dummy-house.png"
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export const MyAccountProperty = () => {
  let items = new Array(1).fill(image);

  return (
    <div className="own-property-container">
      <div className="myproperty-add">
        <Link to= "/publish-property">
          <button>
            <IoAddCircleOutline className="add-icon"/>
            <span>Add More Property</span>
          </button>
        </Link>
      </div>

      <div className="myproperty-div">
        {items.map((item, index) => (
            <HouseComponentCard key={index} imgLink={item} link={"/property-housedetails-overview"}/>
        ))}  
        {items.map((item, index) => (
            <LandComponentCard key={index} imgLink={item} link={"/property-landdetails-overview"}/>
        ))} 
        {items.map((item, index) => (
            <VehicleComponentCard key={index} imgLink={item} link={"/property-vehicledetails-overview"}/>
        ))} 
        
      </div>
      
              
    </div>
  );
};
