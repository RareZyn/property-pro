import "./MyAccountTransaction.css";
import ItemInTransactionCard from "../../Cards/Property Cards/ItemInTransactionCard";

export const MyAccountTransaction = () => {
  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">
        <ItemInTransactionCard
          imgLink={require("../../Res/image/image-dummy-house.png")}
        />
      </div>
    </div>
  );
};
