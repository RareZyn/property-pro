import React, { forwardRef } from "react"; 
import './DocumentRejectionCard.css';

const DocumentRejectionCard = forwardRef((props, ref) => {
    return (
      <div className={props.className}>
        <h1>Document rejection</h1>
        <h3>Give reason for rejection</h3>
        <textarea placeholder="Write your reason here..." ref={ref} />
        <div>
          <h5 className="Cancel" ref={ref}>Cancel</h5>
          <h5 className="Send">Send</h5>
        </div>
      </div>
    );
});

export default DocumentRejectionCard;