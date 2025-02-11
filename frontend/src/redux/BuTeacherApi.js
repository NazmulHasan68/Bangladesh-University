import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const teacherApi = createApi({
    reducerPath: "teacherApi",
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:5000/api/v1/teacher",
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
    }),
});

export const { useTeacherRegistrationMutation, useGetTeachersDataQuery } = teacherApi;
