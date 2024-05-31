import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaCarSide, FaTags } from "react-icons/fa";
import { FaCalendarDays, FaGauge, FaHouse, FaLocationDot, FaTag } from "react-icons/fa6";

function VehicleComponentCard({imgLink, link}){
    return(
        <Link to={link}>
            <div id="item-card">
                <section id="img-container">
                    <img src={imgLink} alt="image property" srcset="" />
                </section>
                <div id="details-container">
                    <div id="myproperty-name"><h4>Vehicle</h4></div>
                    <div id="myproperty-location"><FaLocationDot/>  Gua Musang, Kelantan</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaTags/> New
                        </div>
                        <div id="property-smallicon">
                            <FaGauge/> 200cc
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaCalendarDays /> 2023
                        </div>
                        <div id="property-smallicon">
                            <FaCarSide/> 4 seat
                        </div>
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
            </div>
        </Link>
    )
}

export default VehicleComponentCard