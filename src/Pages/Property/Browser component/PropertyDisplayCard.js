import "../Browser component/PropertyDisplayCard.css";

export const PropertyDisplayCard = () => {
    return(
        <div id="prop-card" className="box-shadow">
            <div id="details">
                <div id="img-placeholder">
                   <img src="src/Res/image/IMG PH.png" alt="Image" srcset="" />
                </div>
                <h4 className="txt40">Item name</h4>
                <p className="txt24">RM XX.XX</p>
            </div>
        </div>
    )
}

