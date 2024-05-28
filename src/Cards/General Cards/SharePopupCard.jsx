import React from 'react';
import './SharePopupCard.css'; // Optional: for styling

const SharePopupCard = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "popup display-block" : "popup display-none";

  return (
    <div className={showHideClassName}>
      <section className="sharepopup-main">
        {children}
        <button className="close-button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default SharePopupCard;
