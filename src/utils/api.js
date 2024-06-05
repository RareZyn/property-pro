import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:5000/property",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/getAllProperties", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  try {
    const response = await api.get(`/getProperty/${id}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};
export const buyProperty = async (propertyID, id) => {
  try {
    const response = await api.post(
      `/buyProperty/${propertyID}`,
      { id },
      {
        timeout: 10 * 1000,
      }
    );
    toast.success("Property bought successfully");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }


};

export const availableProperties = async () => {
  try {
    const response = await api.get("/availableProperties", {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};



