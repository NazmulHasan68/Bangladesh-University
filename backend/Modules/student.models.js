import mongoose from "mongoose";

// Define Address Schema
const addressSchema = new mongoose.Schema({
  village: { type: String, required: true, default: "" },
  upozilla: { type: String, required: true, default: "" },
  district: { type: String, required: true, default: "" },
  division: { type: String, required: true, default: "" },
  postcode: { type: Number, required: true, default: 1207 },
});

// Define Subject Schema
const subjectSchema = new mongoose.Schema({
  subjectname: { type: String, required: true , default:"English"},
  subjectcode: { type: String, required: true, default : 'CSE-1102' },
  subjectcredit: { type: Number, required: true, default: 3 },
  subjectgrade: { type: Number, required: true, default: 3.00},
  faculty: { type: String, required: true, default : "abcd" },
});


// Define Semester Schema
const semesterSchema = new mongoose.Schema({
  semesterName: { type: String, required: true, default:"spring 2025" },
  subjects: { type: [subjectSchema], default: [] },
});

// Define Payment Schema
const paymentSchema = new mongoose.Schema({
  totalpayment: { type: Number, required: true, default: 500000 },
  completepayment: { type: Number, required: true, default: 100000 },
  persemetercompletepayment: { type: Number, required: true, default: 20000 },
  totaldue: { type: Number, required: true, default: 30000 },
  permonth: { type: Number, required: true, default: 500000 },
  permonthdue: { type: Number, required: true, default: 30000 },
  semester: { type: Number, required: true, default: 12 },
  completesemester: { type: Number, required: true, default: 2 },
  waiver: { type: Number, required: true, default: 10 },
  banking: { type: String, required: true, default: "mobile" },
  idcardfee : { type: Number, required: true, default: 500 },
  admissionformfess : { type: Number, required: true, default: 500 },
  admissionfee : { type: Number, required: true, default: 500 },
  academicyear : { type: Number, required: true, default: 2024 }
});





// Define Student Schema =============================================================================
const studentSchema = new mongoose.Schema({
  studentname: { type: String, required: true },
  fathername: { type: String, required: true },
  mothername: { type: String, required: true },
  studentprofile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  religion: { type: String, required: true, default: "Islam" },
  nationality: { type: String, required: true, default: "Bangladeshi" },
  dob: { type: String, required: true, default: "10/02/2005" },
  studentid: { type: Number, required: true, unique: true, default: 20241106883 },
  password : { type:String, required: true, default:'1234'},
  Batch :  { type:Number, required: true, default:68},
  
  // Addresses
  presentaddress: { type: [addressSchema], default: [] },
  permanentaddress: { type: [addressSchema], default: [] },

  // School & College Information
  school: [
    {
      schoolname: { type: String, required: true, default: "Abc School" },
      sscresult: { type: Number, required: true, default: 2.00 },
      previousdepartment: { type: String, required: true, default: "science" },
    },
  ],
  college: [
    {
      collegename: { type: String, required: true, default: "xyz College" },
      hscresult: { type: Number, required: true, default: 2.00 },
      currentdepartment: { type: String, required: true, default: "cse" },
    },
  ],

  // Guardian Information
  guardian: [
    {
      guardianname: { type: String, required: true, default: "nmp" },
      guardianphone: { type: String, required: true, default: "+008 005 001 10" },
      guardianlocation: { type: String, required: true, default: "dhaka" },
    },
  ],

  // Club Membership with Roles
  club: [
    {
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
    },
  ],

  permission : { type: Boolean, required: true, default: true },
  
  // Payment Information
  payment: { type: [paymentSchema], default: [] },

  // Semester Details
  completesemester: { type: Number, required: true, default: 0 },
  totalcgpa: { type: Number, required: true, default: 0 },
  semesters: { type: [semesterSchema], default: [] },

  currentsemester : { type : String, required : true, default:"registered"},
  reAdmission : { type : String, required : true, default:"N/A"},
  librarystatus : { type : String, required : true, default:"cleared"},
  CertificateApplicationStatus : { type : String, required : true, default:"N/A"},

},{ timestamps: true });

// Export Student Model
const Student = mongoose.model("Student", studentSchema);
export default Student;
