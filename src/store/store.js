import { configureStore } from "@reduxjs/toolkit";
import { carContactApi } from "./api/carContactApi";
import { commercialContactApi } from "./api/commercialContactApi";

export const store = configureStore({
  reducer: {
    [carContactApi.reducerPath]: carContactApi.reducer,
    [commercialContactApi.reducerPath]: commercialContactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(carContactApi.middleware)
      .concat(commercialContactApi.middleware),
  devTools: import.meta.env.DEV,
});

export default store;