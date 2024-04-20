import styles from "./ViewAccountPost.module.css";
import PostCard from "../../Components/PostCard";
import {ViewAccountHeader} from './ViewAccountHeader';

export const ViewAccountPost = () => {
  return (
    <div className="ViewAccountPost">
      <ViewAccountHeader />
      <div id={styles["post-card-container"]}>
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};
