import "./LaunchPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const LaunchPage = () => {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleHover = () => {
    setHovered(!hovered);
  };

  return (
    <div className={`launchPage ${loaded ? "loaded" : ""}`}>
      <section className="home" id="home">
        <div className="content">
          <h1 id="website-name">PropertyPro+</h1>
          <h1
            id="launch-topic"
            className={hovered ? "hovered" : ""}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            IT'S NEVER TOO LATE TO SPEND, NEVER TOO LATE TO SELL
          </h1>

          <div className="btn-container">
            <Link id="button-register" to="/register">
              <button className="btn register">Register</button>
            </Link>
            <Link id="button-login" to="/login">
              <button className="btn login">Login</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
