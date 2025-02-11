import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker"; 
import Teacher from "../Modules/teacher.models.js"; 

dotenv.config();

// Function to generate random teacher data
const generateTeacherData = (numTeachers = 80) => {
    const teachers = [];

    for (let i = 0; i < numTeachers; i++) {
        const teacher = {
            teachername: faker.person.fullName(),
            fathername: faker.person.firstName(),
            mothername: faker.person.firstName(),
            teacherProfile: faker.image.avatar(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            religion: "Islam",
            nationality: "Bangladeshi",
            dob: faker.date.past({ years: 40 }).toISOString().split("T")[0], // Format DOB for teachers (e.g. 40 years ago)
            teacherid: faker.number.int({ min: 2024000000, max: 2024999999 }), // Random teacher ID
            password: "1234", // Default password for now

            // Address details
            presentaddress: {
                upozilla: faker.location.county(),
                district: faker.location.city(),
                division: faker.location.state(),
                postcode: faker.number.int({ min: 1000, max: 9999 })
            },
            permanentaddress: {
                upozilla: faker.location.county(),
                district: faker.location.city(),
                division: faker.location.state(),
                postcode: faker.number.int({ min: 1000, max: 9999 })
            },

            // Graduation and Post-Graduation information
            graduation: [{
                university: faker.company.name(),
                cgpa: parseFloat(faker.number.float({ min: 2.0, max: 4.0 }).toFixed(2)),
                subject: faker.helpers.arrayElement(["Computer Science", "Mathematics", "Engineering"])
            }],
            postgraduation: [{
                university: faker.company.name(),
                cgpa: parseFloat(faker.number.float({ min: 2.0, max: 4.0 }).toFixed(2)),
                subject: faker.helpers.arrayElement(["Software Engineering", "Data Science", "Cyber Security"])
            }],

            // Faculty information
            faculty: {
                depart: faker.helpers.arrayElement(["CSE", "ECE", "IT"]),
                role: "Teacher"
            },

            // Subjects taught by the teacher
            subjects: [{
                subjectname: faker.helpers.arrayElement(["Physics", "Math", "Programming", "Chemistry"]),
                subjectcode: faker.string.alphanumeric(6).toUpperCase(),
                subjectcredit: faker.number.int({ min: 2, max: 4 }),
                subjectgrade: parseFloat(faker.number.float({ min: 3, max: 4 }).toFixed(2))
            }],

            // Permissions and club membership
            permission: true,
            club: {
                programmingclub: faker.datatype.boolean(),
                programmingclubrole: "Member",
                cricketclub: faker.datatype.boolean(),
                cricketclubrole: "Member",
                footballclub: faker.datatype.boolean(),
                footballclubrole: "Member"
            }
        };

        teachers.push(teacher);
    }

    return teachers;
};

// Insert the teacher data into the database
const insertData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected!");

        const teachers = generateTeacherData(80); // Generate 10 teacher records

        await Teacher.insertMany(teachers);
        console.log("Teacher data inserted successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting data:", error);
        mongoose.connection.close();
    }
};

insertData();
