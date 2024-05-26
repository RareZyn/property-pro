import React from "react";
import ItemInTransactionCard from "../../Cards/Property Cards/ItemInTransactionCard";
import "./MyAccountTransaction.css";

const TransactionCard = ({ title, transactions, cardClass }) => (
  <div className={`TransactionCard ${cardClass}`}>
    <h2>{title}</h2>
    {transactions.map((transaction, index) => (
      <div className="TransactionItem" key={index}>
        <ItemInTransactionCard imgLink={transaction.imgLink} />
        <div>
          <h1>{transaction.title}</h1>
          <p>{transaction.description}</p>
          <div className="PriceContainer">{`Price: ${transaction.price}`}</div>
        </div>
      </div>
    ))}
  </div>
);

export const MyAccountTransaction = () => {
  const unpaidTransactions = [
    {
      imgLink: require("../../Res/image/image-dummy-house.png"),
      title: "Unpaid Transaction Title",
      description: "Unpaid Transaction Description",
      price: "$1000",
    },
    // Add more unpaid transactions here
  ];

  const paidTransactions = [
    {
      imgLink: require("../../Res/image/image-dummy-house.png"),
      title: "Paid Transaction Title",
      description: "Paid Transaction Description",
      price: "$1500",
    },
    // Add more paid transactions here
  ];

  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">
        <TransactionCard
          title="Unpaid Transactions"
          transactions={unpaidTransactions}
          cardClass="UnpaidTransactions"
        />
        <TransactionCard
          title="Paid Transactions"
          transactions={paidTransactions}
          cardClass="PaidTransactions"
        />
      </div>
    </div>
  );
};
