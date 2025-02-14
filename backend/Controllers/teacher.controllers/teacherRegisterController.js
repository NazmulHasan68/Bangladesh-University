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

export const getSingleTeacher = async(req, res)=>{
    try {
        const { teacherid } = req.params;
        const teacher = await Teacher.findOne({teacherid});

        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        res.status(200).json(teacher);
    } catch (error) {
        console.error("Error in Get single teacher teacher:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
}


export const EditTeacherData = async (req, res) => {
    try {
        const { id } = req.params; // Get teacher ID from request params
        const {
            teachername, fatherName, motherName, dob, religion, phone, email, department, role, presentDivision,
            presentDistrict, presentUpazila, permanentDivision, permanentDistrict, permanentUpazila, graduationversity, 
            grasubject, graduationcgpa, postversity, postsubject, postcgpa
        } = req.body;


        // Check if teacher exists
        const teacher = await Teacher.findById(id);
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Handle file update
        const image = req.file ? req.file.path : teacher.teacherProfile;

        // Update teacher data
        teacher.teachername = teachername || teacher.teachername;
        teacher.fathername = fatherName || teacher.fathername;
        teacher.mothername = motherName || teacher.mothername;
        teacher.dob = dob || teacher.dob;
        teacher.religion = religion || teacher.religion;
        teacher.phone = phone || teacher.phone;
        teacher.email = email || teacher.email;
        teacher.teacherProfile = image;
        
        teacher.faculty.depart = department || teacher.faculty.depart;
        teacher.faculty.role = role || teacher.faculty.role;
        
        teacher.presentaddress.upozilla = presentUpazila || teacher.presentaddress.upozilla;
        teacher.presentaddress.district = presentDistrict || teacher.presentaddress.district;
        teacher.presentaddress.division = presentDivision || teacher.presentaddress.division;
        
        teacher.permanentaddress.upozilla = permanentUpazila || teacher.permanentaddress.upozilla;
        teacher.permanentaddress.district = permanentDistrict || teacher.permanentaddress.district;
        teacher.permanentaddress.division = permanentDivision || teacher.permanentaddress.division;
        
        teacher.graduation.university = graduationversity || teacher.graduation.university;
        teacher.graduation.cgpa = graduationcgpa || teacher.graduation.cgpa;
        teacher.graduation.subject = grasubject || teacher.graduation.subject;
        
        teacher.postgraduation.university = postversity || teacher.postgraduation.university;
        teacher.postgraduation.cgpa = postcgpa || teacher.postgraduation.cgpa;
        teacher.postgraduation.subject = postsubject || teacher.postgraduation.subject;

        // Save updated teacher data
        await teacher.save();

        res.status(200).json({
            message: "Teacher data updated successfully",
            data: teacher,
        });
    } catch (error) {
        console.error("Error in EditTeacherData:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message,
        });
    }
};
