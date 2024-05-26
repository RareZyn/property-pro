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

    useEffect(() => {
        const token = Cookies.get('token')
        if(token){
            setUser(jwtDecode(token).user)   
        }
    }, [])

    return(
        <AppContext.Provider value={{userDetails, user, setUser}}>
            {children}
        </AppContext.Provider>
    )
}

export const useContext = () => useContext(AppProvider)