import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <h3>
        <p>
          (Div ni sementara sahaja) navigate ---> buat frontend dekat page
          masing2
        </p>
      </h3>

      <div>
        <section>
          <Link id="nav" to="/navHeader">
            Navigation Header
          </Link>
        </section>
        <section>
          <Link id="nav" to="/">
            HomePage
          </Link>
        </section>
        <section>
          <Link id="nav" to="/launch">
            Launch Page
          </Link>
        </section>

        <section>
          <Link id="nav" to="/register">
            Register Page
          </Link>
        </section>

        <section>
          <Link id="nav" to="/login">
            Login Page
          </Link>
        </section>

        <section>
          <Link id="nav" to="/side">
            SideBar
          </Link>
        </section>
      </div>
    </div>
  );
};
