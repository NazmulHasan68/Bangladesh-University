import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
  reducerPath: "teacherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bangladesh-university.onrender.com/api/v1/teacher",  
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
