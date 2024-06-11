import React from "react";
import { getHotItemsProperty } from "../utils/api";
import { useQuery } from "react-query";

export const useMostHotProperty = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "getHotItemsProperty",
    getHotItemsProperty,
    { refetchOnWindowFocus: false }
  );

  return { data, isError, isLoading, refetch };
};
