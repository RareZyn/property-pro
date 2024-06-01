import React, { forwardRef } from "react"
import "./PropertyRejectionCard.css"

const PropertyRejectionCard = forwardRef((props, ref) => {
  return(
    <div className={props.className}>
      <h1>Property Rejection</h1>
      <h3>Give reason of rejection</h3>
      <textarea placeholder="Write your reason here..."/>
      <div>
        <h5 className="Cancel" ref={ref}>Cancel</h5>
        <h5 className="Send">Send</h5>
      </div>
    </div>
  )
});

export default PropertyRejectionCard;