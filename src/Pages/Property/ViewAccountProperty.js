import "./ViewAccountProperty.css";
import { ViewAccountHeader } from "./ViewAccountHeader";
import ItemComponentCard from "./Property component/ItemComponentCard";

export const ViewAccountProperty = () => {
  return (
    <div className="ViewAccountProperty">
      <ViewAccountHeader name={"Wan"} bio={"Bla bla bla bla bla"}/>
      <div id="own-property-container">
        <ItemComponentCard />
        <ItemComponentCard />
      </div>
    </div>
  );
};
