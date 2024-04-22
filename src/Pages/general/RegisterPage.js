import "./RegisterPage.css";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <div className="RegisterPage">
      <div className="RegisterBlock">
        <form action="">
          <div className="register-topic">
            <h1>Create New Account</h1>
          </div>
          <div className="inputDiv">
            <section id="input-section">
              Name
              <input type="text" />
            </section>
            <section id="input-section">
              Email
              <input type="email" />
            </section>
            <section id="input-section">
              Password
              <input type="Password" />
            </section>
            <button id="create-account">Create Account</button>
            <div id="have-account">
              <p>
                Already have an account?{" "}
                <Link to="/login" id="login-word">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
