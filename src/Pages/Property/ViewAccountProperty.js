import "./ViewAccountProperty.css";
import ItemComponentCard from "./Property component/ItemComponentCard";
import image from "../../Res/image/property image.png"

export const ViewAccountProperty = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<ItemComponentCard imgLink={image} />);
  }

  return (
    <div className="own-property-container">
      {items}
    </div>
  );
};
