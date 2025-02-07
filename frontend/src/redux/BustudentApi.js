import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/student" }),
  endpoints: (builder) => ({

    studentRegister: builder.mutation({  // this is student register APi
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),


  }),
});

// Export hook for using the mutation
export const { useStudentRegisterMutation } = studentApi;

