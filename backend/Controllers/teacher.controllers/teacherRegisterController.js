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
        const { teacherid } = req.params; 
        const {
            teachername, fathername, mothername, dob, religion, phone, email, 
            faculty, presentaddress, permanentaddress, 
            graduation, postgraduation
        } = req.body;

        // Ensure teacher exists
        const teacher = await Teacher.findOne({ teacherid });
        if (!teacher) {
            return res.status(404).json({ message: "Teacher not found" });
        }

        // Handle file upload (keep old image if no new file is uploaded)
        const image = req.file?.path || teacher.teacherProfile;

        // Update teacher fields using Mongoose's `set()`
        teacher.set({
            teachername: teachername || teacher.teachername,
            fathername: fathername || teacher.fathername,
            mothername: mothername || teacher.mothername,
            dob: dob || teacher.dob,
            religion: religion || teacher.religion,
            phone: phone || teacher.phone,
            email: email || teacher.email,
            teacherProfile: image,
            faculty: {
                depart: faculty?.depart || teacher.faculty.depart,
                role: faculty?.role || teacher.faculty.role,
            },
            presentaddress: {
                upozilla: presentaddress?.upozilla || teacher.presentaddress.upozilla,
                district: presentaddress?.district || teacher.presentaddress.district,
                division: presentaddress?.division || teacher.presentaddress.division,
                postcode: presentaddress?.postcode || teacher.presentaddress.postcode,
            },
            permanentaddress: {
                upozilla: permanentaddress?.upozilla || teacher.permanentaddress.upozilla,
                district: permanentaddress?.district || teacher.permanentaddress.district,
                division: permanentaddress?.division || teacher.permanentaddress.division,
                postcode: permanentaddress?.postcode || teacher.permanentaddress.postcode,
            },
            graduation: {
                university: graduation?.university || teacher.graduation.university,
                cgpa: graduation?.cgpa || teacher.graduation.cgpa,
                subject: graduation?.subject || teacher.graduation.subject,
            },
            postgraduation: {
                university: postgraduation?.university || teacher.postgraduation.university,
                cgpa: postgraduation?.cgpa || teacher.postgraduation.cgpa,
                subject: postgraduation?.subject || teacher.postgraduation.subject,
            }
        });

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

