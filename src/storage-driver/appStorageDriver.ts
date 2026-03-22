import { Driver } from "redux-remember";
import * as SecureStore from "expo-secure-store";
import { mmkvDriver } from "./mmkvDriver";

export const secureKey = "auth";

export const appStorageDriver: Driver = {
  setItem(key: string, value: string) {
    if (key === secureKey) {
      return SecureStore.setItemAsync(key, value);
    }
    return mmkvDriver.setItem(key, value);
  },
  getItem(key: string) {
    if (key === secureKey) {
      return SecureStore.getItemAsync(key);
    }
    return mmkvDriver.getItem(key);
  },
};
