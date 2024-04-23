import "./LoginBroker.css";
import { Link } from "react-router-dom";

export const LoginBroker = () => {
  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
        <h1>Login Broker</h1>
        <section className="broker-section">
          <span id="broker-input-title">Name</span>
          <input type="text" id="input-broker" />
        </section>
        <section className="broker-section">
          <span id="broker-input-title">Password</span>
          <input type="password" id="input-broker" />
        </section>
        <Link to="/verify-property-homepage">
          <button id="register-broker-button">Login</button>
        </Link>
        <div className="RegisterBrokerToLogin">
          <p>Don't have an account?</p>
          <a href="./register-broker">Register</a>
        </div>
      </div>
    </div>
  );
};
