import { apiInstance } from "../constants/apiInstance";

export const fetcher = async (url: string) => {
  const response = await apiInstance.get(url);
  return response.data;
};
