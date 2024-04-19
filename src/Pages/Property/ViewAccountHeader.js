import "./ViewAccountHeader.css";

export const ViewAccountHeader = ({name, bio}) => {
  return (
    <div className="ViewAccountHeader">
      <section className="flex" id="details-vah">
        <div className="ProfilePicture"></div>
        <div className="acc-desc">
          <h1>{name}</h1>
          <p>{bio}</p>
        </div>
      </section>
      <hr />
      <a href="">Property</a>
      <a href="">Post</a>
      <a href="">About</a>
    </div>
  );
};
