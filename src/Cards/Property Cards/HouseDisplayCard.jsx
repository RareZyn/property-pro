import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaLayerGroup } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const HouseDisplayCard = ({ card, link }) => {
  const navigate = useNavigate();
  return (
    <Link to={link}>
      <div id="prop-card" onClick={() => navigate("/property-House-Details")}>
        <div id="img-placeholder">
          <img src={card.image} alt="Image" srcset="" id="img-ph" />
        </div>
        <div id="details">
          <div id="details-container">
            <div id="myproperty-type">
              <h2>{card.propertyType}</h2>
            </div>
            <div id="myproperty-title">
              <h4>{card.title}</h4>
            </div>
            <div id="myproperty-location">
              <FaLocationDot />
              {card.house?.location}
            </div>
            <div id="myproperty-price">
              <FaTags />
              {card.price}
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaHouse />
                {card.house?.size}
              </div>
              <div id="property-smallicon">
                <FaBed /> {card.house?.bedrooms}
              </div>
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaLayerGroup /> {card.house?.rooms}
              </div>
              <div id="property-smallicon">
                <FaShower /> {card.house?.bathrooms}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
