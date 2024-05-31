import "./ManageProperty.css";
import ItemComponentCardA from "../../Cards/Property Cards/VehicleComponentCard";
import ItemComponentCardB from "../../Cards/Property Cards/HouseComponentCard";
import ItemComponentCardC from "../../Cards/Property Cards/LandComponentCard";
import imageA from "../../Res/image/car.jpeg";
import imageB from "../../Res/image/house.jpeg";
import imageC from "../../Res/image/house.jpeg";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

export const ManageProperty = () => {
  const items = [
    { type: "A", img: imageA, link: "/property-Vehicle-Details" },
    { type: "B", img: imageB, link: "/property-Land-Details" },
    { type: "C", img: imageC, link: "/property-House-Details" },
    { type: "A", img: imageA, link: "/property-Vehicle-Details" },
  ];

  const renderCard = (item, index) => {
    switch (item.type) {
      case "A":
        return <ItemComponentCardA key={index} imgLink={item.img} link={item.link} />;
      case "B":
        return <ItemComponentCardB key={index} imgLink={item.img} link={item.link} />;
      case "C":
        return <ItemComponentCardC key={index} imgLink={item.img} link={item.link} />;
      default:
        return null;
    }
  };

  return (
    <div className="manage-property-container">
      <div className="property-headline">Manage Property</div>
      <div className="manageproperty-div">
        {items.map((item, index) => renderCard(item, index))}
      </div>
      <div className="manageproperty-add">
        <Link to="/Publish-Property">
          <button>
            <IoAddCircleOutline className="add-icon" />
            <span>Add More Property</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
