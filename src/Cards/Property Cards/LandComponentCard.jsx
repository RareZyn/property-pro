import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaCity, FaShower, FaTags} from "react-icons/fa";
import { FaFileCircleQuestion, FaLeftRight, FaLocationDot} from "react-icons/fa6";


function LandComponentCard({card, link}){
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
              <FaLocationDot /> {card.land?.location}
            </div>
            <div id="myproperty-price">
              <FaTags /> RM {card.price}
            </div>
            <div id="property-smallicon">
              <FaLeftRight /> {card.land.area} sqft
            </div>
            <div id="property-smallicon">
              <FaCity /> {card.land?.land_type}
            </div>
            <div id="mypropertyicon-content">
              <div id="property-smallicon">
                <FaFileCircleQuestion /> {card.land?.ownership_type}
              </div>
            </div>
            {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
          </div>
        </div>
      </Link>
    );
}

export default LandComponentCard