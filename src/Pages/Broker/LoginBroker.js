import "./LoginBroker.css";

export const LoginBroker = () => {
  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
        <h3>BROKER registration</h3>
        <h5>In broker we trust</h5>
        <RegisterBrokerInputItem inputTitle="Email" inputHint=""></RegisterBrokerInputItem> 
        <RegisterBrokerInputItem inputTitle="Password" inputHint=""></RegisterBrokerInputItem>
        <button>
          <a href="./verify-property-homepage">
            Login
          </a>
        </button>
        <div className="RegisterBrokerToLogin">
          <p>Don't have an account?</p>
          <a href="./register-broker">Register</a>
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