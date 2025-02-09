import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker"; // Correct import
dotenv.config();
import Student from "../Modules/student.models.js";

const subjectPools = [
    ["Physics", "Math", "Computer Science", "Chemistry", "Biology"],
    ["English", "History", "Economics", "Geography", "Political Science"],
    ["Programming", "Data Structures", "Algorithms", "Database Systems", "Operating Systems"],
    ["AI & ML", "Cybersecurity", "Software Engineering", "Networking", "Cloud Computing"]
];

// Function to generate random student data
const generateStudentData = (numStudents = 120) => {
    const students = [];

    for (let i = 0; i < numStudents; i++) {
        const student = {
            studentname: faker.person.fullName(),
            fathername: faker.person.firstName(),
            mothername: faker.person.firstName(),
            studentprofile: faker.image.avatar(),
            email: faker.internet.email(),
            phone: faker.phone.number(),
            religion: "Islam",
            nationality: "Bangladeshi",
            dob: faker.date.past({ years: 20 }).toISOString().split("T")[0], // Format DOB
            studentid: faker.number.int({ min: 2000000000, max: 2999999999 }),
            password: "1234",
            Batch: faker.number.int({ min: 60, max: 70 }),
            presentaddress: [{ 
                village: faker.location.city(),
                upozilla: faker.location.county(),
                district: faker.location.city(),
                division: faker.location.state(),
                postcode: faker.number.int({ min: 1000, max: 9999 })
            }],
            permanentaddress: [{
                village: faker.location.city(),
                upozilla: faker.location.county(),
                district: faker.location.city(),
                division: faker.location.state(),
                postcode: faker.number.int({ min: 1000, max: 9999 })
            }],
            school: [{
                schoolname: faker.company.name(),
                sscresult: parseFloat(faker.number.float({ min: 4, max: 5 }).toFixed(2)),
                previousdepartment: "Science"
            }],
            college: [{
                collegename: faker.company.name(),
                hscresult: parseFloat(faker.number.float({ min: 4, max: 5 }).toFixed(2)),
                previousdepartment: "Science"
            }],
            desiredDepartment: faker.helpers.arrayElement(["Computer Science", "Electrical Engineering", "Mechanical Engineering"]),
            guardian: [{
                guardianname: faker.person.fullName(),
                guardianphone: faker.phone.number(),
                guardianlocation: faker.location.city()
            }],
            club: [{
                programmingclub: faker.datatype.boolean(),
                programmingclubrole: "Member"
            }],
            permission: true,
            payment: [{
                totalpayment: faker.number.int({ min: 500000, max: 700000 }),
                completepayment: faker.number.int({ min: 100000, max: 300000 }),
                totaldue: faker.number.int({ min: 200000, max: 500000 }),
                waiver: faker.number.int({ min: 5, max: 15 })
            }],
            completesemester: faker.number.int({ min: 0, max: 1 }),
            totalcgpa: parseFloat(faker.number.float({ min: 2, max: 4 }).toFixed(2)),

            semesters: subjectPools.map((subjects, index) => ({
                semesterName: ["Spring 2025", "Fall 2024", "Summer 2024", "Winter 2023"][index],
                subjects: subjects.map(subject => ({
                    subjectname: subject,
                    subjectcode: faker.string.alphanumeric(6).toUpperCase(),
                    subjectcredit: faker.number.int({ min: 3, max: 4 }),
                    subjectgrade: parseFloat(faker.number.float({ min: 2, max: 4 }).toFixed(2)),
                    faculty: faker.person.fullName()
                }))
            })),

            currentsemester: "registered",
            reAdmission: "N/A",
            librarystatus: "cleared",
            CertificateApplicationStatus: "N/A"
        };

        students.push(student);
    }

    return students;
};

// Insert the data into the database
const insertData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected!");

        const students = generateStudentData(120); // Generate 120 student records

        await Student.insertMany(students);
        console.log("Student data inserted successfully!");

        mongoose.connection.close();
    } catch (error) {
        console.error("Error inserting data:", error);
        mongoose.connection.close();
    }
};

insertData();
