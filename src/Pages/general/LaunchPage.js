import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LaunchPage.css";

export const LaunchPage = () => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleHover = () => {
    setHovered(!hovered);
  };

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to top when navigating to register page
  const handleRegisterClick = () => {
    window.scrollTo(0, 0);
    nav("/register");
  };

  const handleLoginClick = () => {
    window.scrollTo(0, 0);
    nav("/login");
  };

  return (
    <div className={`launchPage ${loaded ? "loaded" : ""}`}>
      <section className="home" id="home">
        <div className="content">
          <h1 id="website-name">PropertyPro+</h1>
          <h1
            id="launch-topic"
            className={`${hovered ? "hovered" : ""}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            IT'S NEVER TOO LATE TO SPEND, NEVER TOO LATE TO SELL
          </h1>

          <div className="btn-container">
            <button
              id="button-register"
              onClick={handleRegisterClick}
              className="btn register"
            >
              Register
            </button>
            <button
              id="button-login"
              onClick={handleLoginClick}
              className="btn login"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};