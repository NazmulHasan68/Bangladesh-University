import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
  reducerPath: "studentApi",
  baseQuery: fetchBaseQuery({
    baseUrl:  import.meta.env.NODE_ENV === "production"
      ? "https://bangladesh-university-q3xg.vercel.app/api/v1/student" // Production URL
      : "https://bangladesh-university-q3xg.vercel.app/api/v1/student", // Localhost URL
  }),
  endpoints: (builder) => ({
    studentRegister: builder.mutation({
      query: (formData) => ({
        url: "/register",
        method: "POST",
        body: formData,
      }),
    }),

    getStudentsData: builder.query({
      query: () => ({
        url: "/students",
        method: 'GET',
      }),
    }),

    getStudentsDataById: builder.query({
      query: (studentid) => ({
        url: `/students/${studentid}`,
        method: 'GET',
      }),
    }),

    updateStudentsDataById: builder.mutation({
      query: (updatedFormData) => ({
        url: `/students/${updatedFormData.studentid}`,
        method: "PUT",
        body: updatedFormData,
      }),
    }),

    updateStudentsAddressById: builder.mutation({
      query: (updatedFormData) => ({
        url: `/students/address/${updatedFormData.studentid}`,
        method: "PUT",
        body: updatedFormData,
      }),
    }),
  }),
});

export const {
  useStudentRegisterMutation, 
  useGetStudentsDataQuery, 
  useGetStudentsDataByIdQuery, 
  useUpdateStudentsDataByIdMutation, 
  useUpdateStudentsAddressByIdMutation,
} = studentApi;
