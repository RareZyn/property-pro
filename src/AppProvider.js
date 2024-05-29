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

    const [user, setUser] = useState(null)
    const [navPage, setNavPage] = useState(false)

    useEffect(() => {
        const token = Cookies.get('token');
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
                // Optionally, handle the error, e.g., remove the invalid token from cookies
                Cookies.remove('token');
            }
        }
    }, [navPage]);

    return(
        <AppContext.Provider value={{userDetails, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}