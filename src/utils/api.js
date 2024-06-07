import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:5000/property",
});

// Function to add land
export const addLand = async (landDetails) => {
  try {
    const response = await api.post("/addLand", landDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("Land added successfully");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};

// Function to add house
export const addHouse = async (houseDetails) => {
  try {
    const response = await api.post("/addHouse", houseDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("House added successfully");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};

// Function to add vehicle
export const addVehicle = async (vehicleDetails) => {
  try {
    const response = await api.post("/addVehicle", vehicleDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("Vehicle added successfully");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};

// Existing functions
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

export const toFav = async (propertyID, id) => {
  try {
    const response = await api.post(`/toFav/${propertyID}`, { id });
    toast.success("Favorite updated successfully");
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};

export const getAllFavorites = async (id) => {
  try {
    const response = await api.get(`/getAllFavorites`, {
      params: { id },
    });
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};


export const getPropertySeller = async(id) => {
    try {
      const response = await api.get(`/getPropertySeller/${id}`, {
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
}
