import "./RegisterBroker.css";
import SearchBar from "../../Components/SearchBar";

export const RegisterBroker = () => {
  return (
    <div className="RegisterBroker">
      <div className="RegisterBrokerCard">
        <h3>BROKER registration</h3>
        <h5>In broker we trust</h5>
        <div className="InputDetails">
          <h7>Name (As in IC)</h7>
          <div className="Input">
            Enter your Name
          </div>
        </div>
        <RegisterBrokerInputItem inputTitle="Email" inputHint=""></RegisterBrokerInputItem> 
        <RegisterBrokerInputItem inputTitle="Password" inputHint=""></RegisterBrokerInputItem>
        <button>
          Create Account
        </button>
        <div className="RegisterBrokerToLogin">
          <p>Already have an account?</p>
          <a>Login</a>
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
