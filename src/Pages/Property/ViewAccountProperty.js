import "./ViewAccountProperty.css";
import { ViewAccountHeader } from "./ViewAccountHeader";
import ItemComponentCard from "./Property component/ItemComponentCard";

export const ViewAccountProperty = () => {
  return (
    <div className="ViewAccountProperty">
      <div id="own-property-container">
        <ItemComponentCard />
        <ItemComponentCard />
      </div>
    </div>
  );
};
