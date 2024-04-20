import styles from "./ViewAccountPost.module.css";
import PostCard from "../../Components/PostCard";
import {ViewAccountHeader} from './ViewAccountHeader';

import AddPostCard from "../../Components/AddPostCard";

export const ViewAccountPost = () => {
  return (
    <div className="ViewAccountPost">
      <div id={styles["post-card-container"]}>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
