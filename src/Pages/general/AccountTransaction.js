import "./AccountTransaction.css";
import React from "react";
import ItemInTransactionCard from "../../Cards/Property Cards/ItemInTransactionCard";

const TransactionCard = ({ title, transaction, cardClass }) => (
  <div className={`TransactionCard ${cardClass}`}>
    <h2>{title}</h2>
    <div className="TransactionItem">
      <ItemInTransactionCard imgLink={transaction.imgLink} />
      
    </div>
  </div>
);

export const MyAccountTransaction = () => {
  const paidTransaction = {
    imgLink: require("../../Res/image/image-dummy-house.png")
  };

  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">
        
      </div>
    </div>
  );
};


