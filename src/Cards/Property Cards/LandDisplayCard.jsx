
import "./PropertyDisplayCard.css";
import { Link } from "react-router-dom";
import { FaLocationDot, FaTags, FaLeftRight, FaCity, FaFileCircleQuestion } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export const LandDisplayCard = ({ link, card }) => {
  const navigate = useNavigate();
  return (
    <Link to={link}>
      <div id="prop-card">
        <div
          id="img-placeholder"
          onClick={() => navigate("/property-Land-Details")}
        >
          <img src={card.image} alt="Image" srcset="" id="img-ph" />
        </div>
        <div id="details">
          <div id="details-container">
            <div id="myproperty-type">
              <h2>{card.propertyType}</h2>
            </div>
            <div id="myproperty-name">
              <h4>{card.title}</h4>
            </div>
            <div id="myproperty-location">
              <FaLocationDot />
              {card.land?.location}
            </div>
            <div id="myproperty-price">
              <FaTags /> {card.price}
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaLeftRight /> {card.land?.area}
              </div>
              <div id="property-smallicon">
                <FaCity /> {card.land?.land_type}
              </div>
              <div id="mypropertyicon-content">
                <div id="property-smallicon">
                  <FaFileCircleQuestion /> {card.land?.ownership_type}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};