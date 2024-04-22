import styles from "./ViewAccountPost.module.css";
import PostCard from "../../Components/PostCard";
import { ViewAccountHeader } from "./ViewAccountHeader";

import AddPostCard from "../../Components/AddPostCard";
import { NavHeader } from "../Navigation/NavHeader";

export const ViewAccountPost = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<PostCard />);
  }

  return (
    <div className="ViewAccountPost">
      <NavHeader />
      <div id={styles["post-card-container"]}>{items}</div>
    </div>
  );
};
