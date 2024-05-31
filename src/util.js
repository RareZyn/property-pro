import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

export const logout = () => {
  Cookies.remove('token')
}

export const fetchUser = async () => {
  try {
    const token = Cookies.get('token');
    if (!token) throw new Error('No token found');
    
    const userCookie = jwtDecode(token).userData;
    const res = await axios.get(`http://localhost:5000/users/get/${userCookie._id}`, { withCredentials: true });

    return(res.data);
  } catch (error) {
    console.error('Error fetching user:', error);
  }

  return null;
};

export const getUserID = () => {
  try {
    const token = Cookies.get('token');
    if (!token) {
      throw new Error('No token found');
    }
    
    const decodedToken = jwtDecode(token);
    return decodedToken.userData._id;
  } catch (error) {
    console.error('Error getting username:', error);
    return null;
  }
};