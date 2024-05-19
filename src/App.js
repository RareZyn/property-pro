import "./App.css";
import React, {createContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavHeader } from "./Pages/Navigation/NavHeader.js";
import { Footer } from "./Pages/general/Footer.jsx";
import routes from './routesConfig.js'

export const AppContext = createContext();

function NavHeaderWrapper() {
  const { pathname } = useLocation();
  const shouldShowNavHeader = !["/", "/register", "/login"].includes(pathname);
  return shouldShowNavHeader ? <NavHeader /> : null;
}

function App() {
  const userDetails = {
    username: "Wan Razim",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
    age: "21",
    location: "Bangsar, KL",
    email: "email@gmail.com",
    phoneNum: "012-3456789",
  };


  return (
    <div className="App">
      <AppContext.Provider value={{ userDetails }}>
        <Router>
          <NavHeaderWrapper />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element}/>
            ))}
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
