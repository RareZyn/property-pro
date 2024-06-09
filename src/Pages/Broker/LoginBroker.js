import "./LoginBroker.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export const LoginBroker = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/verify-property-house");
  };

  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
      <form onSubmit={handleSubmit}>
          <h1>Login Broker</h1>

          <div className="inputs">
            <section className="broker-section">
              <div className="input-label">Name</div>
              <input 
              type="text" 
              name="fullname"
              value={brokerFormValues.fullname}
              onChange={handleChange}
              id="input-broker" />
            </section>

            <section className="broker-section">
              <div className="input-label">Password</div>
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
              />
              <div className="input-label">Show Password</div>
            </div>

            <button type="submit" className="broker-login-button">
              Login
            </button>

            <div className="broker-login-to-register">
              <p>Don't have an account?</p>
              <Link to="/register-broker" className="register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
