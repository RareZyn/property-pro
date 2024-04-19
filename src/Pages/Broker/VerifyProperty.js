import "./VerifyProperty.css";

export const VerifyProperty = () => {
  return (
    <div className="VerifyProperty">
      <img src={require("../../Res/image/image icon.png")} className="ThumbnailImage"/>
      <div className="PropertyDetailsCard">
        <img src={require("../../Res/image/image icon.png")}/>
        <img src={require("../../Res/image/image icon.png")}/>
        <img src={require("../../Res/image/image icon.png")}/>
        <h1>Item Title</h1>
        <p>
          Bla bla bla bla bla
        </p>
        <button>Price RMXX.XX</button>
        <div className="SupportingDocuments"></div>
        <div className="ProgressBar"></div>
        <div className='RejectVerify'>
          <h3>Reject</h3>
          <h3>Verify</h3>
        </div>
      </div>
    </div>
  );
};
