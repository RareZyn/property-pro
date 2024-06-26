import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { NavHeader } from "./Pages/Navigation/NavHeader.js";
import { Footer } from "./Pages/general/Footer.jsx";
import { ProtectedRoute, routes } from "./routesConfig.js";
import { ChatProvider } from "./context/ChatContext.js";
import axios from "axios";
import { UserContext } from "./context/UserContext.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { Bounce, ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import { ForumProvider } from "./context/ForumContext.js";
import Cookie from 'js-cookie'

function NavHeaderWrapper() {
  const { pathname } = useLocation();
  const shouldShowNavHeader = !["/", "/register", "/login"].includes(pathname);
  return shouldShowNavHeader ? <NavHeader /> : null;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add a loading state
  const { userToken } = useContext(UserContext);
  const queryClient = new QueryClient();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users/auth", {
          withCredentials: true,
        });
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (err) {
        console.log("Authentication check error:", err);
      } finally {
        setLoading(false); 
      }
    };

    checkAuth();
  }, [userToken]);

  if (loading) {
    return <div>Loading...</div>; // Render a loading state while checking authentication
  }

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <ChatProvider>
          <ForumProvider>
            <NavHeaderWrapper />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    route.path === "/login" ||
                    route.path === "/register" ||
                    route.path === "/" ? (
                      route.element
                    ) : (
                      <ProtectedRoute
                        component={route.element}
                        isAuthenticated={isAuthenticated}
                      />
                    )
                  }
                >
                  {route.children &&
                    route.children.map((childRoute, childIndex) => (
                      <Route
                        key={childIndex}
                        path={childRoute.path}
                        element={
                          <ProtectedRoute
                            component={childRoute.element}
                            isAuthenticated={isAuthenticated}
                          />
                        }
                      />
                    ))}
                </Route>
              ))}
            </Routes>
            <Footer />
          </ForumProvider>
          </ChatProvider>
        </Router>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
