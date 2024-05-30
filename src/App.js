import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavHeader } from "./Pages/Navigation/NavHeader.js";
import { Footer } from "./Pages/general/Footer.jsx";
import { routes, ProtectedRoute } from './routesConfig.js';
import ScrollToTop from "./Content/ScrollToTop"; // Correct the import path to ScrollToTop component
import axios from "axios";
import { logout } from "./util.js";

function NavHeaderWrapper() {
  const { pathname } = useLocation();
  const shouldShowNavHeader = !["/", "/register", "/login"].includes(pathname);
  return shouldShowNavHeader ? <NavHeader /> : null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users/auth', { withCredentials: true });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (err) {
        logout();
        console.log('Authentication check error:', err);
      } finally {
        setLoading(false); // Ensure loading state is set to false regardless of success or failure
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while checking authentication
  }

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <NavHeaderWrapper />
        <Routes>
          {routes.map((route, index) => (
            <Route 
              key={index} 
              path={route.path} 
              element={
                (route.path === '/login' || route.path === '/register' || route.path === '/') ?
                route.element : <ProtectedRoute component={route.element} isAuthenticated={isAuthenticated} />
              }/>
          ))}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
