import axios from "axios";
import Cookies from "js-cookie";
import {jwtDecode} from 'jwt-decode'
import firebase from "firebase/compat/app";

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

export const logout = () => {
  Cookies.remove('token')
}

export const getToken = () => {
  const token = Cookies.get('token');
  console.log(token);
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

export const addProfile = async (file, username) => {
  const validFileTypes = ['image/png', 'image/jpeg'];

  if (file) {
    if (validFileTypes.includes(file.type)) {
      const storageRef = firebase.storage().ref('/profilePicture').child(`/${username}`);
      const fileRef = storageRef.child(file.name);
      const uploadTask = fileRef.put(file);

      try {
        const snapshot = await uploadTask;
        const result = await snapshot.ref.getDownloadURL();
        
        // Check URL either uploaded or not
        console.log(result);

        // Return the URL
        return(result)
      } catch (error) {
        // Distinguish between different error types if needed
        console.error("Error uploading file:", error);
      }
    } else {
      console.error("Invalid file type:", file.type);
    }
  } else {
    console.error("No file selected");
  }
};
