import "./RegisterBroker.css";
import SearchBar from "../../Cards/General Cards/SearchBar";

export const RegisterBroker = () => {
  return (
    <div className="RegisterBroker">
      <div className="RegisterBrokerCard">
        <h3>BROKER registration</h3>
        <h5>In broker we trust</h5>

        <div className="InputDetails">
          <h7>Name as in IC</h7>
          <input type="username" placeholder="Enter your Name"/>
        </div>

        <div className="InputDetails">
          <h7>Email</h7>
          <input type="email" placeholder="Enter your Email"/>
        </div>

        <div className="InputDetails">
          <h7>Password</h7>
          <input type="password" placeholder="Enter your Password"/>
        </div>

        <div id="RegisterBrokerUploadIC">
          <input type="file" id="RegisterBrokerUploadIC-input"/>
          <label for="RegisterBrokerUploadIC-input">
            <img src={require("../../Res/image/upload.png")}/>
            <h1>Choose files to upload</h1>
            <h7 className="RegisterBrokerUploadFileInstruction">Identification Card (IC)</h7>
          </label>
        </div>

        <div id="RegisterBrokerUploadIC">
          <input type="file" id="RegisterBrokerUploadIC-input"/>
          <label for="RegisterBrokerUploadIC-input">
            <img src={require("../../Res/image/upload.png")}/>
            <h1>Choose files to upload</h1>
            <h7 className="RegisterBrokerUploadFileInstruction">Real Estate Negotiator Liscence</h7>
          </label>
        </div>

        <button>
          <a href="./verify-property-homepage">
            Create Account
          </a>
        </button>
        <div className="RegisterBrokerToLogin">
          <p>Already have an account?</p>
          <a href="./login-broker">Login</a>
        </div>
      </div>
    </div>
  );
};

function RegisterBrokerInputItem({inputTitle,inputHint}){
  return(
    <div className="InputDetails">
      <h7>{inputTitle}</h7>
      <div className="Input">
        {inputHint===""? "Enter your "+inputTitle : {inputHint}}
      </div>
    </div>
  )
}
