import axios from "axios";
import { toast } from "react-toastify";

export const api = axios.create({
  baseURL: "http://localhost:5000/property",
});

export const userApi = axios.create({
  baseURL: "http://localhost:5000/users",
});

export const brokerApi = axios.create({
  baseURL: "http://localhost:5000/broker",
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

// Function to update land
export const updateLand = async (landDetails) => {
  try {
    const response = await api.put("/updateLand", landDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("Land updated successfully");
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
//update House
export const updateHouse = async (houseDetails) => {
  try {
    const response = await api.put("/updateHouse", houseDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("House updated successfully");
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
//update Vehicle
export const updateVehicle = async (vehicleDetails) => {
  try {
    const response = await api.put("/updateVehicle", vehicleDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    toast.success("Vehicle updated successfully");
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
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getPropertySeller = async (id) => {
  try {
    const response = await api.get(`/getPropertySeller/${id}`,
       {
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

export const getPropertyBought = async (userId) => {
  try {
    const response = await api.get(`/getPropertyBought`, {
      params: { userId },
      timeout: 10 * 1000,
    });
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    throw error.response?.data || error.message;
  }
};

export const countSellProperty = async (userId) => {
  try {
    const response = await userApi.get(`/countSellProperty`, {
      params: { userId },
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

export const countPurchaseProperty = async (userId) => {
  try {
    const response = await userApi.get(`/countPurchaseProperty`, {
      params: { userId },
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

export const countOtherUserPurchase = async (userId) => {
  try {
    const response = await userApi.get(`/countOtherUserPurchase`, {
      params: { userId },
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

export const addBroker = async (brokerDetails) => {
  try {
    const response = await brokerApi.post("/addBroker", brokerDetails, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
   toast.success("You successfully registered as Broker");
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};


export const verifyProperty = async (propertyID, verificationResults, brokerID) => {
  try {
    const response = await brokerApi.post(
      "/verifyProperty",
      { propertyID, verificationResults,brokerID}, // Pass data as an object
      {
        timeout: 10 * 1000,
      }
    );

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    toast.success("Property verified status updated");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const unverifiedPropery  = async () => {
  try {
    const response = await brokerApi.get("/unverifiedProperty", {
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

export const verifiedPropery = async () => {
  try {
    const response = await brokerApi.get("/verifiedProperty", {
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

export const getAllBrokers = async () => {
  try {
    const response = await brokerApi.get("/getAllBroker", {
      timeout: 100 * 1000,
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

export const getVerifyPropertyDetail = async (propertyID) => {
  try {
    const response = await brokerApi.get("/getVerifyPropertyDetail",propertyID, {
      timeout: 100 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error.message);
    throw error;
  }
};

export const getHotItemsProperty = async () => {
  try {
    const response = await api.get("/getHotItemsProperty", {
      timeout: 100 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("Something went wrong");
    console.log(error.message);
    throw error;
  }

}

export const getPropertyName = async (title) => {
  try {
    const response = await api.get(`/getPropertyName/${title}`, {
      timeout: 10 * 1000,
    });

    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }

    return response.data; // This will now be an array of properties
  } catch (error) {
    toast.error("Something went wrong");
    throw error;
  }
};