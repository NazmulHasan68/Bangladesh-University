import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().nonempty("Name is required"),
  fatherName: z.string().nonempty("Father's name is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  village: z.string().nonempty("Village is required"),
  division: z.string().nonempty("Division is required"),
  district: z.string().nonempty("District is required"),
  upozilla: z.string().nonempty("Upojilla is required"),
  sscResult: z
    .number()
    .min(0, "SSC result must be a positive number")
    .max(5, "SSC result must be between 0 and 5"),
  hscResult: z
    .number()
    .min(0, "HSC result must be a positive number")
    .max(5, "HSC result must be between 0 and 5"),
  department: z.string().nonempty("Department is required"),
  desiredDepartment: z.string().nonempty("Desired department is required"),
  presentGuardian: z.string().nonempty("Present guardian is required"),
  religion: z.string().nonempty("Religion is required"),
  ownNumber: z
    .string()
    .nonempty("Own number is required")
    .regex(/^\d{10}$/, "Own number must be a valid 10-digit phone number"),
  guardianNumber: z
    .string()
    .nonempty("Guardian number is required")
    .regex(/^\d{10}$/, "Guardian number must be a valid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  admissionroll: z.string().nonempty("Admission role is required"),
//   file: z
//   .instanceof(File)
//   .refine((file) => file.size > 0, {
//     message: "File is required and must be a valid file",
//   })
//   .refine((file) => file.type.startsWith("image/"), {
//     message: "File must be a valid image",
//   }),

});


export const teacherSchema = z.object({
  name: z.string().nonempty("Name is required"),
  fatherName: z.string().nonempty("Father's name is required"),
  motherName: z.string().nonempty("Mother's name is required"),
  village: z.string().nonempty("Village is required"),
  division: z.string().nonempty("Division is required"),
  district: z.string().nonempty("District is required"),
  upozilla: z.string().nonempty("Upojilla is required"),
  subject: z.string().nonempty("Subject is required"),
  designation: z.string().nonempty("Designation is required"),
  department: z.string().nonempty("Department is required"),
  joiningDate: z.string().nonempty("Joining date is required"),
  experience: z
    .number()
    .min(0, "Experience must be a positive number")
    .max(50, "Experience must be realistic"),
  religion: z.string().nonempty("Religion is required"),
  ownNumber: z
    .string()
    .nonempty("Own number is required")
    .regex(/^\d{10}$/, "Own number must be a valid 10-digit phone number"),
  guardianNumber: z
    .string()
    .nonempty("Guardian number is required")
    .regex(/^\d{10}$/, "Guardian number must be a valid 10-digit phone number"),
  email: z.string().email("Invalid email address"),
  teacherID: z.string().nonempty("Teacher ID is required"),
  file: z
    .instanceof(File)
    .refine((file) => file.size > 0, {
      message: "File is required and must be a valid file",
    })
    .refine((file) => file.type.startsWith("image/"), {
      message: "File must be a valid image",
    }),
});