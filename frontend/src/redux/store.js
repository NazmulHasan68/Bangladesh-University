import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./BustudentApi";

const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(studentApi.middleware),
});

export default store;
