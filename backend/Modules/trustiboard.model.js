import mongoose from "mongoose";

// Define Address Schema
const addressSchema = new mongoose.Schema({
  village: { type: String, required: true, default: "" },
  upozilla: { type: String, required: true, default: "" },
  district: { type: String, required: true, default: "" },
  division: { type: String, required: true, default: "" },
  postcode: { type: Number, required: true, default: 1207 },
});

// Define Trustiboard Schema
const TrustiboardSchema = new mongoose.Schema(
  {
    teachername: { type: String, required: true },
    fathername: { type: String, required: true },
    mothername: { type: String, required: true },
    teacherprofile: { type: String, required: true }, // Renamed for clarity
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String, required: true, unique: true, index: true },
    religion: { type: String, required: true, default: "Islam" },
    nationality: { type: String, required: true, default: "Bangladeshi" },
    dob: { type: Date, required: true },
    teacherid: { type: Number, required: true, unique: true },
    password: { type: String, required: true, default: "1234" },

    educationQualification: { type: Boolean, required: true, default: true }, // Renamed for clarity

    // Addresses
    presentAddress: { type: addressSchema, required: true },
    permanentAddress: { type: addressSchema, required: true },

    // Education Information
    graduation: {
      university: { type: String, required: true, default: "Abc University" },
      cgpa: { type: Number, required: true, default: 2.0 },
      subject: { type: String, required: true, default: "Science" },
    },
    postGraduation: {
      university: { type: String, required: true, default: "XYZ University" },
      cgpa: { type: Number, required: true, default: 2.0 },
      subject: { type: String, required: true, default: "CSE" },
    },

    profession : { type :String, required:true, default:"member"},
    charmen : {type :String, required:true, default:false}

  },
  { timestamps: true } 
);

export default mongoose.model("Trustiboard", TrustiboardSchema);
