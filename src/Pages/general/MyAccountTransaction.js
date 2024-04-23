import "./MyAccountTransaction.css";
import ItemInTransactionCard from "../../Cards/Property Cards/ItemInTransactionCard";

export const MyAccountTransaction = () => {
  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">
        <ItemInTransactionCard/>
      </div>
    </div>
  );
};
