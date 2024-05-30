import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import {jwtDecode} from 'jwt-decode'

export const AppContext = createContext()

export const AppProvider = ({children}) => {
    const userDetails = {
        username: "Wan Razim",
        bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
        age: "21",
        location: "Bangsar, KL",
        email: "email@gmail.com",
        phoneNum: "012-3456789",
    };

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(Cookies.get('token'));

    useEffect(() => {
        const interval = setInterval(() => {
            const newToken = Cookies.get('token');
            if (newToken !== token) {
                setToken(newToken);
            }
        }, 1000); // Poll every second

        return () => clearInterval(interval);
    }, [token]);

    useEffect(() => {
        if (token) {
            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.user) {
                    setUser(decodedToken.user);
                } else {
                    console.error('Invalid token structure');
                }
            } catch (error) {
                console.error('Failed to decode token', error);
                Cookies.remove('token');
                setToken(null);
                setUser(null);
            }
        } else {
            setUser(null);
        }
    }, [token]);

    return(
        <AppContext.Provider value={{userDetails, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}