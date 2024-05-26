import "./App.css";
import React, {createContext, useContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavHeader } from "./Pages/Navigation/NavHeader.js";
import { Footer } from "./Pages/general/Footer.jsx";
import routes from './routesConfig.js'
import { AppProvider } from "./AppProvider.js";

function NavHeaderWrapper() {
  const { pathname } = useLocation();
  const shouldShowNavHeader = !["/", "/register", "/login"].includes(pathname);
  return shouldShowNavHeader ? <NavHeader /> : null;
}

function App() {
  return (
    <div className="App">
        <Router>
          <NavHeaderWrapper />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
