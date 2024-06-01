import style from "./BrowserProperty.module.css";
import { HouseDisplayCard } from "../../Cards/Property Cards/HouseDisplayCard";
import { VehicleDisplayCard } from "../../Cards/Property Cards/VehicleDisplayCard";
import { LandDisplayCard } from "../../Cards/Property Cards/LandDisplayCard";
import SearchBar from "../../Cards/General Cards/SearchBar";


export const BrowserProperty = () => {
  const propertyCardsData = [
    { type: "House", link: "/property-House-Details" },
    { type: "Vehicle", link: "/property-Vehicle-Details" },
    { type: "Item", link: "/property-Land-Details" },
    { type: "House", link: "/property-House-Details" },
    { type: "Vehicle", link: "/property-Vehicle-Details" },
    { type: "Item", link: "/property-Land-Details" },
  ];

  const renderCard = (item, index) => {
    switch (item.type) {
      case "House":
        return <HouseDisplayCard key={index} imgLink={item.img} link={item.link} />;
      case "Vehicle":
        return <VehicleDisplayCard key={index} imgLink={item.img}  link={item.link} />;
      case "Item":
        return <LandDisplayCard key={index}  imgLink={item.img}link={item.link} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <header id={style["header-container"]}>
        <SearchBar id={style["browse-search"]} hint="Browse Property..." />
      </header>
      <h1 className="property-headline">Hot Items</h1>
      <div className="properties-grid">
        {propertyCardsData.map((item, index) => renderCard(item, index))}
      </div>
    </div>
  );
};

