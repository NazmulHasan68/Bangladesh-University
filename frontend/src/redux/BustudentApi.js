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

    getStudentsData: builder.query({
      query: () => {
        return {
          url: `/students`,
          method: 'GET',
        };
      }
    }),

    getStudentsDataById: builder.query({
      query: (studentid) => {
        URLSearchParams
        return {
          url: `/students/${studentid}`,
          method: 'GET',
        };
      },
    }),
    
    updateStudentsDataById: builder.mutation({
      query: (updatedFormData) => ({
        url: `/students/${updatedFormData.get("studentid")}`,
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

// Export hook for using the mutation
export const {
   useStudentRegisterMutation, 
   useGetStudentsDataQuery , 
   useGetStudentsDataByIdQuery, 
   useUpdateStudentsDataByIdMutation, 
   useUpdateStudentsAddressByIdMutation,
  } = studentApi;

