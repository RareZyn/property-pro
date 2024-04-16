import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="Navbar">
      <div id="user">
        <h4>Aufa</h4>
        <Link id="nav" to="/launch">
          Launch Page
        </Link>
        <Link id="nav" to="/register">
          Register Page
        </Link>
        <Link id="nav" to="/login">
          Login Page
        </Link>
        <Link id="nav" to="/make-payment">
          Make Payment Page
        </Link>
      </div>
      <div id="user">
        <h4>Wan</h4>
        <Link id="nav" to="/side">
          SideBar
        </Link>
        <Link id="nav" to="/navHeader">
          Navigation Header
        </Link>
        <Link id="nav" to="/chat-popup">
          Chat Popup
        </Link>
        <Link id="nav" to="/chat">
          Chat
        </Link>
        <Link id="nav" to="/register-broker">
          Register Broker
        </Link>
        <Link id="nav" to="/verify-property">
          Verify Property
        </Link>
        <Link id="nav" to="/update-progress">
          Update Progress
        </Link>
      </div>
      <div id="user">
        <h4>Ezyan</h4>
        <Link id="nav" to="/myaccount">
          MyAccount Header
        </Link>
        <Link id="nav" to="/myaccount-transaction">
          MyAccount Transaction
        </Link>
        <Link id="nav" to="/myaccount-post">
          MyAccount Post
        </Link>
        <Link id="nav" to="myaccount-property">
          MyAccount Property
        </Link>
        <Link id="nav" to="myaccount-details">
          MyAccount Details
        </Link>
        <Link id="nav" to="manage-account">
          ManageAccount
        </Link>
      </div>

      <Link id="nav" to="/">
        HomePage
      </Link>
    </div>
  );
};
