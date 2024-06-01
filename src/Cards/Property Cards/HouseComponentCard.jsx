import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed, FaLayerGroup, FaTags } from "react-icons/fa";
import { FaHouse, FaLocationDot } from "react-icons/fa6";

function HouseComponentCard({imgLink, link}){
    return(
        <Link to={link}>
            <div id="item-card">
                <section id="img-container">
                    <img src={imgLink} alt="image property" srcset="" />
                </section>
                <div id="details-container">
                    <div id="myproperty-name"><h4>2 Storey House in Petaling Jaya</h4></div>
                    <div id="myproperty-location"><FaLocationDot/>  Petaling Jaya, Selangor</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaHouse /> 2120 sqft
                        </div>
                        <div id="property-smallicon">
                            <FaBed/> 2 
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaLayerGroup /> 2 storey
                        </div>
                        <div id="property-smallicon">
                            <FaShower/> 2 
                        </div>
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
            </div>
        </Link>
    )
}

export default HouseComponentCard