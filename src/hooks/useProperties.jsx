import React from 'react'
import { availableProperties } from "../utils/api";
import { useQuery } from 'react-query';

export const useProperties = () => {
  const { data, isLoading, isError, refetch } = useQuery(
    "availableProperties",
    availableProperties,
    { refetchOnWindowFocus: false }
  );                                                                                    
  return (
   {data,isError,isLoading,refetch}
  )
}
