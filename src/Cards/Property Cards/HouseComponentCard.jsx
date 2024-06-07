import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaLayerGroup, FaTags } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";

function HouseComponentCard({card, link}){
    return (
      <Link to={link}>
        <div id="item-card">
          <section id="img-container">
            <img src={card?.images[0]} alt="image property" srcset="" />
          </section>
          <div id="details-container">
            <div id="myproperty-name">
              <h4>{card.title}</h4>
            </div>
            <div id="myproperty-location">
              <FaLocationDot /> {card.house.location}
            </div>
            <div id="myproperty-price">
              <FaTags /> RM {card.price}
            </div>
              <div id="property-smallicon">
                <FaHouse /> {card.house.size} sqft
              </div>
              <div id="property-smallicon">
                <FaBed /> {card.house.rooms}
              </div>
              <div id="property-smallicon">
                <FaShower /> {card.house.bathrooms}
            </div>
            {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
          </div>
        </div>
      </Link>
    );
}

export default HouseComponentCard