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
      <div id="user">
        <h4>Aisyah</h4>
        <Link id="nav" to="/">
          HomePage
        </Link>
        <Link id="nav" to="property-details">
          Property Details
        </Link>
        <Link id="nav" to="publish-property">
          Publish Property
        </Link>
      </div>
      <div id="user">
        <h4>Azim</h4>
        <Link id="nav" to="browser-property">
          BrowserProperty
        </Link>
        <Link id="nav" to="saved-property">
          Saved Property
        </Link>
        <Link id="nav" to="manage-property">
          Manage Property
        </Link>
        <Link id="nav" to="view-account-header">
          View Account Header
        </Link>
        <Link id="nav" to="view-account-property">
          ViewAccountProperty
        </Link>
        <Link id="nav" to="view-account-post">
          View Account Post
        </Link>
        <Link id="nav" to="view-account-about">
          View Account About
        </Link>
      </div>
      <div id="user">
        <h4>Razin</h4>
        <Link id="nav" to="forum-page">
          ForumPage
        </Link>
        <Link id="nav" to="forum-header">
          ForumHeader
        </Link>
        <Link id="nav" to="forum-create-post">
          ForumCreatePost
        </Link>
      </div>
    </div>
  );
};
