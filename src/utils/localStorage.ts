import { LOCAL_STORAGE_KEYS } from "../constants/localStorageKeys";

export const setToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
};

export const getToken = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
};
