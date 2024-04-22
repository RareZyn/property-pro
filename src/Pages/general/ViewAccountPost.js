import styles from "./ViewAccountPost.module.css";
import PostCard from "../../Cards/Posting Cards/PostCard";
import { ViewAccountHeader } from "./ViewAccountHeader";

import AddPostCard from "../../Cards/Posting Cards/AddPostCard";

export const ViewAccountPost = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<PostCard />);
  }

  return (
    <div className="ViewAccountPost">
      <div id={styles["post-card-container"]}>
        {items}
      </div>
    </div>

    // <div id="own-property-container">

    // </div>
  );
};
