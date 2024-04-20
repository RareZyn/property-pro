import styles from "./ViewAccountPost.module.css";
import PostCard from "../../Components/PostCard";
import {ViewAccountHeader} from './ViewAccountHeader';

import AddPostCard from "../../Components/AddPostCard";

export const ViewAccountPost = () => {
  let items=[];
  for(let i=0 ; i<5 ; i++){
    items.push(<PostCard/>);
  }

  return (
    <div className="ViewAccountPost">
      <div id={styles["post-card-container"]}>
        {items}
      </div>
    </div>
  );
};
