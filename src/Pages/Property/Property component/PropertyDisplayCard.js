import "./PropertyDisplayCard.css";
import imgPh from "../../../Res/image/IMG PH.png"

export const PropertyDisplayCard = () => {
    return(
        <div id="prop-card" className="box-shadow">
            <div id="details">
                <div id="img-placeholder">
                   <img src={imgPh} alt="Image" srcset="" id="img-ph"/>
                </div>
                <h4 className="txt40">Item name</h4>
                <p className="txt24">RM XX.XX</p>
            </div>
        </div>
    )
}

