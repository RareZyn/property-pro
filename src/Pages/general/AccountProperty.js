import "./AccountProperty.css";
import { ManageProperty } from "../Property/ManageProperty";

export const AccountProperty = () => {

  return (
    <div className="own-property-container">
      <div className="myproperty-add">
        <ManageProperty></ManageProperty>
      </div>
    </div>
  );
};
