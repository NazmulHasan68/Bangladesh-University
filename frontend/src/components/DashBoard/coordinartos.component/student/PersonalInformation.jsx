import React, { useEffect, useState } from "react";
import { useUpdateStudentsDataByIdMutation } from "../../../../redux/BustudentApi";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';

export default function PersonalInformation({ studentById }) {
    const { studentid } = useParams();
    const [updateStudent] = useUpdateStudentsDataByIdMutation();

    const [formData, setFormData] = useState({
        studentname: "",
        studentprofile: "",
        email: "",
        phone: "",
        dob: "",
        nationality: "",
        religion: "",
        fathername: "",
        mothername: "",
        desiredDepartment: "",
        totalcgpa: "",
        currentsemester: "",
        Batch: "",
        profileImage: null,
    });

    // Load student data when available
    useEffect(() => {
        if (studentById) {
            setFormData({
                studentname: studentById.studentname || "",
                studentprofile: studentById.studentprofile || "fallback-image-url.jpg",
                email: studentById.email || "",
                phone: studentById.phone || "",
                dob: studentById.dob || "",
                nationality: studentById.nationality || "",
                religion: studentById.religion || "",
                fathername: studentById.fathername || "",
                mothername: studentById.mothername || "",
                desiredDepartment: studentById.desiredDepartment || "",
                totalcgpa: studentById.totalcgpa || "",
                currentsemester: studentById.currentsemester || "",
                Batch: studentById.Batch || "",
                profileImage: null,
            });
        }
    }, [studentById]);

    // Handle text field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    // Handle file selection when image is clicked
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevState) => ({
                ...prevState,
                profileImage: file,
                studentprofile: URL.createObjectURL(file), // Preview the selected image
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
      
        const updatedFormData = new FormData();
        for (const key in formData) {
          if (key !== 'profileImage') {
            updatedFormData.append(key, formData[key]);
          }
        }
      
        if (formData.profileImage) {
          updatedFormData.append('studentprofile', formData.profileImage);
        }
      
        updatedFormData.append('studentid', studentid);
      
        updateStudent(updatedFormData);
        toast.success("This is a success message!");
      
      };
      

    return (
        <div className="w-full p-4 rounded-2xl bg-slate-50 shadow-md mt-4 flex flex-col md:flex-row gap-4 items-center">
            <div className="flex justify-center basis-1/3">
                {/* Clickable image to open file input */}
                <div onClick={() => document.getElementById("profileImageInput").click()}>
                    <img
                        src={formData.studentprofile}
                        alt="Profile"
                        className="w-24 h-24 md:h-36 md:w-36 object-cover bg-transparent cursor-pointer"
                    />
                </div>
                {/* Hidden file input */}
                <input
                    type="file"
                    id="profileImageInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                />
            </div>

            <form onSubmit={handleSubmit} className="w-full basis-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                    {[
                        "studentname",
                        "fathername",
                        "mothername",
                        "dob",
                        "email",
                        "phone",
                        "nationality",
                        "religion",
                        "desiredDepartment",
                        "totalcgpa",
                        "currentsemester",
                        "Batch",
                    ].map((field) => (
                        <div key={field}>
                            <label htmlFor={field} className="block text-sm text-gray-600 capitalize">
                                {field.replace(/([A-Z])/g, " $1").trim()}
                            </label>
                            <input
                                type={field === "email" ? "email" : "text"}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                placeholder={field.replace(/([A-Z])/g, " $1").trim()}
                                className="rounded w-full mb-2 focus:outline-none bg-transparent pl-2 p-1 bg-gray-50 text-gray-400"
                            />
                        </div>
                    ))}
                </div>

                <div className="text-right">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4 sm:w-auto">
                        Update Information
                    </button>
                </div>
            </form>
        </div>
    );
}
