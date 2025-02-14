import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetSingleTeacherQuery } from "../../../../redux/BuTeacherApi";
import EditTeacherForm from "./EditTeacherForm";

const TeacherProfilePage = () => {
      const [open, setOpen] = useState(false); 
    const { teacherid } = useParams();
    const { data: teacher, error, isLoading } = useGetSingleTeacherQuery(teacherid);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="max-w-4xl mx-auto bg-white/5 shadow-md p-4 rounded-lg h-[480px] overflow-y-auto">
            <div className="flex items-center gap-6 bg-white shadow-lg rounded-2xl p-4">
                <img
                    src={teacher.teacherProfile}
                    alt={teacher.teachername}
                    className="w-32 h-32 rounded-full border"
                />
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800">{teacher.teachername}</h1>
                    <p className="text-gray-600">{teacher.faculty.role} - {teacher.faculty.depart}</p>
                    <p className="text-gray-600">Email: {teacher.email}</p>
                    <button  onClick={() => setOpen(true)} className="text-white bg-sky-600 px-6 py-1 mt-2 rounded-3xl">Edit Profile</button>
                </div>
            </div>

            <div className="mt-6 bg-white shadow-lg rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800 py-2">Personal Information</h2>
                <p><strong className="text-gray-900">Father's Name:</strong> {teacher.fathername}</p>
                <p><strong className="text-gray-900">Mother's Name:</strong> {teacher.mothername}</p>
                <p><strong className="text-gray-900">Date of Birth:</strong> {new Date(teacher.dob).toDateString()}</p>
                <p><strong className="text-gray-900">Nationality:</strong> {teacher.nationality}</p>
                <p><strong className="text-gray-900">Religion:</strong> {teacher.religion}</p>
                <p><strong className="text-gray-900">Phone: </strong>{teacher.phone}</p>
            </div>

            <div className="mt-6 bg-white shadow-lg rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">Education</h2>
               <div className="flex gap-0 flex-col md:flex-row justify-between items-start">
                    <div >
                        <h3 className="text-lg font-medium text-gray-700">Graduation</h3>
                        {teacher.graduation.map((grad, index) => (
                            <div key={index}>
                                <p><strong>University name : </strong>{grad.university} </p>
                                <p><strong>Subject : </strong>{grad.subject} </p>
                                <p><strong>CGPA  : </strong>{grad.cgpa} </p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mt-4">Post-Graduation</h3>
                        {teacher.postgraduation.map((post, index) => (
                            <div key={index}>
                                <p><strong>University name : </strong>{post.university} </p>
                                <p><strong>Subject : </strong>{post.subject} </p>
                                <p><strong>CGPA  : </strong>{post.cgpa} </p>
                            </div>
                        ))}
                    </div>
               </div>
            </div>

            <div className="mt-6 bg-white shadow-lg rounded-2xl p-4">
                <h2 className="text-xl font-semibold text-gray-800">Subjects</h2>
                <ul className="list-disc pl-2">
                    {teacher.subjects.map((subject, index) => (
                        <div key={index} className="mt-3">
                            <h1><strong>Subject : </strong>{subject.subjectname}</h1>
                            <h1><strong>Code : </strong> {subject.subjectcode}</h1>
                            <h1><strong>Credit : </strong>  {subject.subjectcredit}</h1>
                        </div>
                    ))}
                </ul>
            </div>

            <EditTeacherForm teacher={teacher} open={open} setOpen={setOpen} />
        </div>
    );
};

export default TeacherProfilePage;
