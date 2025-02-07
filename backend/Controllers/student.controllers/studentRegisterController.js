import Student from "../../Modules/student.models.js";

// Student Registration Controller
export const studentRegister = async (req, res) => {
    try {
        // Ensure Multer is handling file uploads
        const file = req.file ? req.file.path : null;

        // Extracting fields from request body
        const { name, fatherName, motherName, village, upozilla, district, division, sscResult, 
            hscResult, department, desiredDepartment, presentGuardian, religion, ownNumber, guardianNumber, 
            email, admissionroll } = req.body;


        console.log(name, fatherName, motherName, village, upozilla, district, division, sscResult, 
            hscResult, department, desiredDepartment, presentGuardian, religion, ownNumber, guardianNumber, 
            email, admissionroll);
        


        // Validate required fields
        if (!name || !email || !ownNumber) {
            return res.status(400).json({ message: "Name, Email, and Own Number are required." });
        }

        // // Create a new student instance
        // const newStudent = new Student({
        //     name, fatherName, motherName, village, upozilla, district, division, sscResult,
        //     hscResult, department, desiredDepartment, presentGuardian, religion, ownNumber, 
        //     guardianNumber, email, admissionroll, profileImage: file
        // });

        // // Save to database
        // await newStudent.save();

        res.status(201).json({ message: "Student registered successfully!",  });

    } catch (error) {
        console.error("Error in studentRegister:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};
