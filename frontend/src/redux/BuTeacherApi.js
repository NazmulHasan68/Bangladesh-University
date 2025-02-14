import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({
    baseUrl:  import.meta.env.NODE_ENV === "production"
      ? "https://bangladesh-university-q3xg.vercel.app/api/v1/teacher"  // Production URL
      : "http://localhost:5000/api/v1/teacher",  // Local development URL
  }),
  endpoints: (builder) => ({
    teacherRegistration: builder.mutation({
      query: (submissionData) => ({
        url: "/register",
        method: "POST",
        body: submissionData, 
      }),
    }),

    getTeachersData: builder.query({
      query: () => ({
        url: "/teachers", 
        method: "GET",     
      }),
    }),

    getSingleTeacher: builder.query({
      query: (teacherid) => ({
        url: `teacher/${teacherid}`,
        method: "GET",
      }),
    }),

    editTeacher: builder.mutation({
      query: ({ teacherid, data }) => ({
        url: `/${teacherid}`,
        method: "PUT",
        body: data, 
      }),
    }),
  }),
});

export const {
  useTeacherRegistrationMutation, 
  useGetTeachersDataQuery, 
  useGetSingleTeacherQuery,
  useEditTeacherMutation
} = teacherApi;
