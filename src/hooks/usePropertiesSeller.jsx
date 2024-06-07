// hooks/usePropertiesSeller.js
import { useQuery } from "react-query";
import { getPropertySeller } from "../utils/api";

export const usePropertiesSeller = (id) => {
  return useQuery(["getPropertySeller", id], () => getPropertySeller(id), {
    refetchOnWindowFocus: false,
  });
};
