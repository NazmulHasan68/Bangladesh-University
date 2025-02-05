import mongoose from "mongoose";

// Define Address Schema
const addressSchema = new mongoose.Schema({
  village: { type: String, required: true, default: "" },
  upozilla: { type: String, required: true, default: "" },
  district: { type: String, required: true, default: "" },
  division: { type: String, required: true, default: "" },
  postcode: { type: Number, required: true, default: 1207 },
});

// Define Staff Schema
const StaffSchema = new mongoose.Schema({
    staffname: { type: String, required: true },
    fathername: { type: String, required: true },
    mothername: { type: String, required: true },
    staffprofile: { type: String, required: true }, // Renamed from studentprofile
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String, required: true, unique: true, index: true },
    religion: { type: String, required: true, default: "Islam" },
    nationality: { type: String, required: true, default: "Bangladeshi" },
    dob: { type: Date, required: true },
    staffid: { type: Number, required: true, unique: true }, // No default to ensure uniqueness
    password: { type: String, required: true, default: "1234" },

    degreeObtained: { type: Boolean, required: true, default: false }, // Renamed for clarity
    jobRole: { type: String, required: true, default: 'officeman' }, // Renamed for clarity
    department: { type: String, required: true, default: 'cse' },
    central: { type: Boolean, required: true, default: false }, // Fixed typo

    // Address (Single object instead of an array)
    presentAddress: { type: addressSchema, required: true },
    permanentAddress: { type: addressSchema, required: true },

    // School & College Information
    education: {
        school: {
            name: { type: String, required: true, default: "Abc School" },
            sscResult: { type: Number, required: true, default: 2.00 },
            previousDepartment: { type: String, required: true, default: "science" },
        },
        college: {
            name: { type: String, required: true, default: "xyz College" },
            hscResult: { type: Number, required: true, default: 2.00 },
            currentDepartment: { type: String, required: true, default: "cse" },
        },
    }
}, { timestamps: true }); 

const Staff = mongoose.model("Staff", studentSchema);
export default Staff;