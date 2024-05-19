import PostCard from "../../Cards/Posting Cards/PostCard";

export const ViewAccountPost = () => {
  let items = [];
  for (let i = 0; i < 5; i++) {
    items.push(<PostCard />);
  }

  return (
    <div className="acc-grid-container">
      {items}
    </div>
  );
};
