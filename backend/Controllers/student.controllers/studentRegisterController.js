import Student from "../../Modules/student.models.js";
import { updateImage } from "../../Untils/imageController.js";

// Student Registration Controller
export const studentRegister = async (req, res) => {
    try {
        // Ensure Multer is handling file uploads
        const file = req.file ? req.file.path : null;

        // Extracting fields from request body
        const { 
            name, fatherName, motherName, village, upozilla, district, division, 
            sscResult, hscResult, department, desiredDepartment, presentGuardian, 
            religion, ownNumber, guardianNumber, email, admissionroll, payment, 
            semesterName, subjectname, subjectcode, subjectcredit, subjectgrade, faculty,
            totalpayment, completepayment, persemetercompletepayment, totaldue, permonth, 
            permonthdue, semester, completesemester, waiver, banking, idcardfee, 
            admissionformfess, admissionfee, academicyear
        } = req.body;

        // Check for required fields
        if (!name || !fatherName || !motherName || !email || !ownNumber || !admissionroll) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        // Check if student with email or phone already exists
        const existingStudent = await Student.findOne({ $or: [{ email }, { phone: ownNumber }] });
        if (existingStudent) {
            return res.status(400).json({ message: "Student with this email or phone already exists." });
        }

        // Create a new student instance
        const newStudent = new Student({
            studentname: name,
            fathername: fatherName,
            mothername: motherName,
            email,
            phone: ownNumber,
            studentprofile: file,
            religion: religion || "Islam",
            presentaddress: [{ village, upozilla, district, division }],
            permanentaddress: [{ village, upozilla, district, division }],
            school: [{ schoolname: "Abc School", sscresult: sscResult, previousdepartment: "science" }],
            college: [{ collegename: "World College", hscresult: hscResult, previousdepartment: department }],
            guardian: [{ guardianname: presentGuardian, guardianphone: guardianNumber, guardianlocation: "dhaka" }],
            studentid: Math.floor(1000000000 + Math.random() * 9000000000), // Generate a random 10-digit ID
            admissionroll,
            desiredDepartment,
            club: [{  // Add default club data here
                programmingclub: false,
                programmingclubrole: "member",
                cricketclub: false,
                cricketclubrole: "member",
                footballclub: false,
                footballclubrole: "member",
                culturalclub: false,
                culturalclubrole: "member",
                library: false,
                libraryrole: "member",
                debating: false,
                debatingrole: "member",
                language: false,
                languagerole: "member",
                photography: false,
                photographyrole: "member",
                videography: false,
                videographyrole: "member",
                robotics: false,
                roboticsrole: "member",
                contentwriting: false,
                contentwritingrole: "member",
                contest: false,
                contestrole: "member",
                donation: false,
                donationrole: "member",
                badminton: false,
                badmintonrole: "member",
                carrom: false,
                carromrole: "member",
                chess: false,
                chessrole: "member"
            }],
            payment: [{
                totalpayment,
                completepayment,
                persemetercompletepayment,
                totaldue,
                permonth,
                permonthdue,
                semester,
                completesemester,
                waiver,
                banking,
                idcardfee,
                admissionformfess,
                admissionfee,
                academicyear
            }],
            semesters: [{
                semesterName: semesterName || "Spring-2024",
                subjects: [{
                    subjectname: subjectname || "English",
                    subjectcode: subjectcode || "CSE-1102",
                    subjectcredit: subjectcredit || 3,
                    subjectgrade: subjectgrade || 3.00,
                    faculty: faculty || "abcd"
                }]
            }]
        });

        // Save to database
        await newStudent.save();

        res.status(201).json({ message: "Student registered successfully!", student: newStudent });
    } catch (error) {
        console.error("Error in studentRegister:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const getStudentData = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error fetching student data", error });
    }
};


export const getStudentById = async(req, res)=>{
    try {
        const { studentid } = req.params;
        const student = await Student.findOne({ studentid });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json(student);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error fetching student data By Id", error });
    }
}




export const updateStudentById = async (req, res) => {
    try {
      const studentid = Number(req.params.studentid); 
      if (isNaN(studentid)) {
        return res.status(400).json({ message: "Invalid student ID format." });
      }

      const student = await Student.findOne({ studentid });
      if (!student) {
        return res.status(404).json({ message: "Student not found." });
      }
  
      const updates = req.body;
      if (req.file) {
        updates.studentprofile = req.file.path; 
       
      }
  
      // Update the student information in the database
      const updatedStudent = await Student.findOneAndUpdate(
        { studentid },
        updates,
        { new: true, runValidators: true }
      );
  
      res.status(200).json({ message: "Student updated successfully!", updatedStudent });
    } catch (error) {
      console.error("Error in updateStudentById:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  