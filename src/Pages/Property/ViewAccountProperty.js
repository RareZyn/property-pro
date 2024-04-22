import "./ViewAccountProperty.css";
import { ViewAccountHeader } from "./ViewAccountHeader";
import ItemComponentCard from "./Property component/ItemComponentCard";
import image from "../../Res/image/property image.png";

export const ViewAccountProperty = () => {
  let items = [];
  for (let i = 0; i < 10; i++) {
    items.push(<ItemComponentCard imgLink={image} />);
  }

  return (
    <div className="ViewAccountProperty">
      <div id="own-property-container">{items}</div>
    </div>
  );
};
