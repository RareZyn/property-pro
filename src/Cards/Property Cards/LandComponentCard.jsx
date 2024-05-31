import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaCity, FaShower, FaTags} from "react-icons/fa";
import { FaFileCircleQuestion, FaLeftRight, FaLocationDot} from "react-icons/fa6";


function LandComponentCard({imgLink, link}){
    return(
        <Link to={link}>
            <div id="item-card">
                <section id="img-container">
                    <img src={imgLink} alt="image property" srcset="" />
                </section>
                <div id="details-container">
                    <div id="myproperty-name"><h4>Agriculture land at Gua Musang</h4></div>
                    <div id="myproperty-location"><FaLocationDot/>  Gua Musang, Kelantan</div>
                    <div id="myproperty-price"><FaTags/>  RM 162,300,000</div>
                    <div id="mypropertyicon-content">
                        <div id="property-smallicon">
                            <FaLeftRight/> 2120 sqft
                        </div>
                        <div id="property-smallicon">
                            <FaCity/> Agriculture
                        </div>
                    </div>
                    <div id="mypropertyicon-content">
                        
                        <div id="property-smallicon">
                            <FaFileCircleQuestion /> Freehold
                        </div>
                        
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
            </div>
        </Link>
    )
}

export default LandComponentCard