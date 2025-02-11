import mongoose, { Schema } from "mongoose";

const addressSchema = new Schema({
  upozilla: { type: String, required: true, default: "" },
  district: { type: String, required: true, default: "" },
  division: { type: String, required: true, default: "" },
  postcode: { type: Number, required: true, default: 1207 },
});

// Define Subject Schema
const subjectSchema = new Schema({
  subjectname: { type: String, required: true, default: "English" },
  subjectcode: { type: String, required: true, default: "CSE-1102" },
  subjectcredit: { type: Number, required: true, default: 3 },
  subjectgrade: { type: Number, required: true, default: 3.0 },
});

const teacherSchema = new Schema({
  teachername: { type: String, required: true },
  fathername: { type: String, required: true },
  mothername: { type: String, required: true },
  teacherProfile: { type: String, required: true , default:"https://www.googleapis.com/auth/userinfo.profile"},
  email: { type: String, required: true, unique: true, index: true },
  phone: { type: String, required: true, unique: true, index: true },
  religion: { type: String, required: true, default: "Islam" },
  nationality: { type: String, required: true, default: "Bangladeshi" },
  dob: { type: Date, required: true, default: new Date("2005-02-10") },
  teacherid: { type: Number, required: true, unique: true, default: 20241106883 },
  password: { type: String, required: true, default: "1234" },

  // Addresses
  presentaddress: { type: addressSchema, default: () => ({}) },
  permanentaddress: { type: addressSchema, default: () => ({}) },

  // School & College Information
  graduation: [
    {
      university: { type: String, required: true, default: "Abc School" },
      cgpa: { type: Number, required: true, default: 2.0 },
      subject: { type: String, required: true, default: "science" },
    },
  ],
  postgraduation: [
    {
      university: { type: String, required: true, default: "xyz College" },
      cgpa: { type: Number, required: true, default: 2.0 },
      subject: { type: String, required: true, default: "cse" },
    },
  ],

  faculty: {
    depart: { type: String, required: true, default: "cse" },
    role : { type : String, required:true, default:'Teacher'},
  },

  subjects: { type: [subjectSchema], default: [] },
  permission : { type: Boolean, required: true, default: true },

  // Club Membership with Roles
  club: {
    programmingclub: { type: Boolean, required: true, default: false },
    programmingclubrole: { type: String, required: true, default: "member" },
    cricketclub: { type: Boolean, required: true, default: false },
    cricketclubrole: { type: String, required: true, default: "member" },
    footballclub: { type: Boolean, required: true, default: false },
    footballclubrole: { type: String, required: true, default: "member" },
    culturalclub: { type: Boolean, required: true, default: false },
    culturalclubrole: { type: String, required: true, default: "member" },
    library: { type: Boolean, required: true, default: false },
    libraryrole: { type: String, required: true, default: "member" },
    debating: { type: Boolean, required: true, default: false },
    debatingrole: { type: String, required: true, default: "member" },
    language: { type: Boolean, required: true, default: false },
    languagerole: { type: String, required: true, default: "member" },
    photography: { type: Boolean, required: true, default: false },
    photographyrole: { type: String, required: true, default: "member" },
    videography: { type: Boolean, required: true, default: false },
    videographyrole: { type: String, required: true, default: "member" },
    robotics: { type: Boolean, required: true, default: false },
    roboticsrole: { type: String, required: true, default: "member" },
    contentwriting: { type: Boolean, required: true, default: false },
    contentwritingrole: { type: String, required: true, default: "member" },
    contest: { type: Boolean, required: true, default: false },
    contestrole: { type: String, required: true, default: "member" },
    donation: { type: Boolean, required: true, default: false },
    donationrole: { type: String, required: true, default: "member" },
    badminton: { type: Boolean, required: true, default: false },
    badmintonrole: { type: String, required: true, default: "member" },
    carrom: { type: Boolean, required: true, default: false },
    carromrole: { type: String, required: true, default: "member" },
    chess: { type: Boolean, required: true, default: false },
    chessrole: { type: String, required: true, default: "member" },
    evenmagement: { type: Boolean, required: true, default: false },
    evenmagementrole: { type: String, required: true, default: "member" },
  },
},{ timestamps: true });

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;