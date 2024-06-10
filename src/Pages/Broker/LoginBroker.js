import "./LoginBroker.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const LoginBroker = () => {
  const [brokerFormValues, setBrokerFormValues] = useState({
    fullname: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBrokerFormValues({
      ...brokerFormValues,
      [name]: value
    });
  };

  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
        <h1>Login Broker</h1>
        <section className="broker-section">
          <span id="broker-input-title">Name</span>
          <input 
          type="text" 
          name="fullname"
          value={brokerFormValues.fullname}
          onChange={handleChange}
          id="input-broker" />
        </section>
        <section className="broker-section">
          <span id="broker-input-title">Password</span>
          <input 
            type={showPassword ? "text" : "password"}
            name="password"
            value={brokerFormValues.password}
            onChange={handleChange}
            id="input-broker" />
        </section>
        <div id="show-password">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            id="show-password-checkbox"
          />
          Show Password
        </div>
        <div className="input-button">
          <Link to="/verify-property-homepage">
            <button id="register-broker-button">Login</button>
          </Link>
        </div>
        <div className="RegisterBrokerToLogin">
          <p>Don't have an account?</p>
          <Link to="/register-broker">Register</Link>
        </div>
      </div>
    </div>
  );
};
