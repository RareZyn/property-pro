import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaTags, FaLayerGroup } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const HouseDisplayCard = ({ card, link }) => {
  const navigate = useNavigate();
  if (!card) return null;
  return (
    <Link to={link}>
      <div id="prop-card" onClick={() => navigate("/property-House-Details")}>
        <div id="img-placeholder">
          <img
            srcSet={card?.images[0]}
            alt="Image"
            id="img-ph"
            style={{ width: "100%", height: "100%" }}
          />
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
              Location:{card.house?.location}
            </div>
            <div id="myproperty-price">
              <FaTags /> Price:RM{card.price}
            </div>
            <div id="property-smallicon">
              <FaHouse /> Size:{card.house?.size}ft
            </div>
            <div id="property-smallicon">
              <FaBed /> Bedrooms: {card.house?.bedrooms}
            </div>
            <div id="property-smallicon">
              <FaLayerGroup /> Rooms:{card.house?.rooms}
            </div>
            <div id="property-smallicon">
              <FaShower /> Bathrooms:{card.house?.bathrooms}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
