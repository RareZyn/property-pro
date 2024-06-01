import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [token, setToken] = useState(Cookies.get('token'));

    useEffect(() => {
        // Function to decode the token and set the user state
        const decodeToken = (token) => {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.username) {
                    setUserToken(decodedToken);
                } else {
                    console.error('Invalid token structure');
                }
            } catch (error) {
                console.error('Failed to decode token', error);
                setToken(null);
                setUserToken(null);
            }
        };

        // Decode token if it exists
        if (token) {
            decodeToken(token);
        } else {
            setUserToken(null);
        }

        // Set up an interval to monitor changes to the token cookie
        const interval = setInterval(() => {
            const newToken = Cookies.get('token');
            if (newToken !== token) {
                setToken(newToken);
            }
        }, 1000); // Check every 1 second

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [token]);

    return(
        <AppContext.Provider value={{user, userToken}}>
            {children}
        </AppContext.Provider>
    )
}