import { configureStore } from "@reduxjs/toolkit";
import { studentApi } from "./BustudentApi";
import { teacherApi } from "./BuTeacherApi";

const store = configureStore({
  reducer: {
    [studentApi.reducerPath]: studentApi.reducer,
    [teacherApi.reducerPath]: teacherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(studentApi.middleware, teacherApi.middleware), 
});

export default store;

