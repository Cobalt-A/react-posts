import axios from "axios";

export const getApiResponse = async <T>(key: string): Promise<T | undefined> => {
  const response = await axios.get<T>(`https://jsonplaceholder.typicode.com${key}`);
  return response.data;
};
