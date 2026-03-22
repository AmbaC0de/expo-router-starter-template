import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/store/slices/auth";
import themeReducer from "@/store/slices/theme";
import mainApi from "./mainApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { appStorageDriver, secureKey } from "@/storage-driver/appStorageDriver";
import { rememberEnhancer, rememberReducer } from "redux-remember";

const reducers = {
  auth: authReducer,
  theme: themeReducer,
  [mainApi.reducerPath]: mainApi.reducer,
};

const rememberedKeys = [secureKey, "theme"];

const reducer = rememberReducer(reducers);

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mainApi.middleware),
  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers().concat(
      rememberEnhancer(appStorageDriver, rememberedKeys),
    ),
});

setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
