import "./ItemComponentCard.css";
import { Link } from "react-router-dom";
import { FaShower, FaBed } from "react-icons/fa";

function VehicleComponentCard({imgLink, link}){
    return(
        <Link to={link}>
            <div id="item-card">
                <section id="img-container">
                    <img src={imgLink} alt="image property" srcset="" />
                </section>
                <div id="details-container">
                    <div id="myproperty-name">Vehicle</div>
                    <div id="myproperty-location">Gua Musang, Kelantan</div>
                    <div id="myproperty-price">Price : RM 162,300,000</div>
                    <div id="myproperty-bedroom-bathroom">
                        <div id="myproperty-noOf-bedroom"><FaBed/> 2</div>
                        <div id="myproperty-noOf-bathroom"><FaShower/> 2</div>
                    </div>
                    {/**<span id="row-3">3210 ekar (Tanah) • RM X.XX PSF</span>**/}
                </div>
            </div>
        </Link>
    )
}

export default VehicleComponentCard