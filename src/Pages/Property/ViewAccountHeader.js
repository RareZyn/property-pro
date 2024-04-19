import "./ViewAccountHeader.css";

export const ViewAccountHeader = ({name, bio, currentPage}) => {
  return (
    <div className="ViewAccountHeader">
      <section className="flex" id="details-vah">
        <div style={{paddingTop: "10.28%", width:"10.28%"}} className="ProfilePicture"></div>
        <div className="acc-desc">
          <h1 style={{fontSize: "3em"}}>{name}</h1>
          <p style={{fontSize: "1.5em"}}>{bio}</p>
        </div>
      </section>
      <hr />
      <section id="account-link-container">
        <a className="account-link" href="">Property</a>
        <a className="account-link" href="">Post</a>
        <a className="account-link" href="">About</a>
      </section>
    </div>
  );
};
