import "./AccountFragmentGrid.css";
import ItemComponentCard from "../../Cards/Property Cards/ItemComponentCard";
import image from "../../Res/image/property image.png";
import "./ViewAccountProperty.css";

export const ViewAccountProperty = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<ItemComponentCard imgLink={image} />);
  }

  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">{items}</div>
    </div>
  );
};
