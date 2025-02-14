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

        getSingleTeacher : builder.query({
            query : (teacherid) =>({
                url : `teacher/${teacherid}`,
                method:"GET",
            })
        }),

        editTeacher: builder.mutation({
            query: (updatedFormData) => ({
              url: `/teachers/${updatedFormData.get("teacherid")}`,
              method: "PUT",
              body: updatedFormData,
            }),
          }),


    }),
});

export const { useTeacherRegistrationMutation, 
    useGetTeachersDataQuery , 
    useGetSingleTeacherQuery,
    useEditTeacherMutation
} = teacherApi;
