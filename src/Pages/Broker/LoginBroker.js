import "./LoginBroker.css";

export const LoginBroker = () => {
  return (
    <div className="LoginBroker">
      <div className="LoginBrokerCard">
        <div className="login-header">
          <h1>Broker Registration</h1>
          <h3>In broker we trust</h3>
        </div>
        <div className="broker-login">
          <section className="broker-input">
            <span>Email</span>
            <input type="email" id="broker-email" />
          </section>
          <section className="broker-input">
            <span>Password</span>
            <input type="password" id="broker-password" />
          </section>
          <div className="button-section">
            <button id="broker-login-button">
              <a href="./verify-property-homepage">Login</a>
            </button>
            <div className="RegisterBrokerToLogin">
              <p>Don't have an account?</p>
              <a href="./register-broker">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
