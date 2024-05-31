import "./AccountFragmentGrid.css";
import HouseComponentCard from "../../Cards/Property Cards/HouseComponentCard";
import image from "../../Res/image/property image.png";
import "./ViewAccountProperty.css";

export const ViewAccountProperty = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<HouseComponentCard imgLink={image} />);
  }

  return (
    <div className="ViewAccountProperty">
      <div className="acc-grid-container">{items}</div>
    </div>
  );
};
