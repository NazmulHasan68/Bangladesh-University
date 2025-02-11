import Teacher from "../../Modules/teacher.models.js";

export const teacherRegister = async (req, res) => {
    try {
        // Extract data from the request body
        const { teachername, fatherName, motherName, dob, religion, phone, email, department, role, presentDivision,
            presentDistrict, presentUpazila, permanentDivision, permanentDistrict, permanentUpazila, graguationversity, 
            grasubject, graguationcgpa, postversity, postsubject, postcgpa,
        } = req.body;

        
        // Validate required fields
        if (!teachername || !fatherName || !motherName || !email || !phone || !department || !role) {
            return res.status(400).json({
                message: "Required fields are missing",
            });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'File is required' });
        }
        const image = req.file ? req.file.path : null;

        // Check if the email is already registered
        const existingTeacher = await Teacher.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({
                message: "Email is already registered",
            });
        }

        // Create a new teacher instance
        const newTeacher = new Teacher({
            teachername:teachername,
            fathername:fatherName,
            mothername:motherName,
            dob:dob,
            religion:religion,
            phone:phone,
            email:email,
            teacherProfile: image,
            faculty : {
                depart : department,
                role:role
            },
            presentaddress :{
                upozilla:presentUpazila,
                district:presentDistrict,
                division:presentDivision
            },
            permanentaddress :{
                upozilla:permanentUpazila,
                district:permanentDistrict,
                division:permanentDivision
            },
            graduation: {
                university:graguationversity,
                cgpa:graguationcgpa,
                subject:grasubject,
            },
            postgraduation : {
                university:postversity,
                cgpa:postcgpa,
                subject:postsubject,
            },
        });

        // Save the teacher to the database
        await newTeacher.save();

        // Send success response
        res.status(201).json({
            message: "Teacher registered successfully",
            data: newTeacher,
        });
    } catch (error) {
        console.error("Error in teacherRegister:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};


export const getTeachersData = async(req, res) =>{
    try {
        const Teachers = await Teacher.find();
        res.status(200).json(Teachers);
    } catch (error) {
        console.error("Error in Get teacher:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
}