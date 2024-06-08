import axios from "axios";
import Cookies from "js-cookie";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

export const logout = () => {
  Cookies.remove('token')
}

export const getUser = async (userToken) => {
  if (!userToken || !userToken.id) {
    console.log('No user token or invalid token');
    return null;
  }

  try {
    const res = await axios.get(`http://localhost:5000/users/get/${userToken.id}`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export const getUserById = async(userID) => {
  try{
    const res = await axios.get(`http://localhost:5000/users/get/${userID}`, { withCredentials: true });
    return res.data;
  } catch(error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}