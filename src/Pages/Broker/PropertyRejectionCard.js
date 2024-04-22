import React, { forwardRef } from "react"
import "./PropertyRejectionCard.css"

const PropertyRejectionCard = React.forwardRef((props, ref) => {
    return(
      <div className="PropertyRejectionCard" ref={ref}>
        <h2>Property Rejection</h2>
        <h4>Give reason of rejection</h4>
        <textarea placeholder="Write your reason here..."/>
      </div>
    )
  });
  
  export default PropertyRejectionCard;