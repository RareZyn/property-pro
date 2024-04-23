import "./LoginBroker.css";

export const LoginBroker = () => {
  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
        <h3>BROKER registration</h3>
        <h5>In broker we trust</h5>

        <div className="InputDetails">
          <h7>Email</h7>
          <input type="email" placeholder="Enter your Email"/>
        </div>
        
        <div className="InputDetails">
          <h7>Password</h7>
          <input type="password" placeholder="Enter your Password"/>
        </div>
        
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