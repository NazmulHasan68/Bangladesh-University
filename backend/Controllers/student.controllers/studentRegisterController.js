import Student from "../../Modules/student.models.js";

export const studentRegister = async (req, res, next) => {
    try {
        // Log the entire request body for debugging
        console.log("Request Body:", req.body);

        const {  name, fatherName, motherName, village, upozilla, district, division, sscResult,
                hscResult, department, desiredDepartment, presentGuardian, religion, ownNumber, 
                guardianNumber, email, admissionroll} = req.body;
        const file = req.file;

        // Log the individual fields to ensure they are correctly parsed
        console.log( name, fatherName, motherName, village, upozilla, district, division, sscResult,
            hscResult, department, desiredDepartment, presentGuardian, religion, ownNumber, 
            guardianNumber, email, admissionroll, file);
     

        // Send success response
        res.status(200).json({ message: "Student registered successfully!" });  
    } catch (error) {
        // Handle any errors
        res.status(500).json({
            message: "Error caught in studentRegister",
            error: error.message, 
        });
    }
};
