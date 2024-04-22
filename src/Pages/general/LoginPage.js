import "./LoginPage.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <div className="LoginPage">
      <form className="LoginBlock" action="">
        <div className="login-topic">
          <h1>Login to your account</h1>
        </div>
        <div className="login-div">
          <section id="login-section">
            Name
            <input type="text" />
          </section>
          <section id="login-section">
            password
            <input type="password" />
          </section>
          <Link to="/Homepage">
            <button id="login-account">Login Account</button>
          </Link>
          <div id="dont-have-account">
            <p>
              Do not have an account?{" "}
              <Link to="/register" id="register-word">
                Register
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
