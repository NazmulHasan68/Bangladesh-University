import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEditTeacherMutation } from "../../../../redux/BuTeacherApi";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";

export default function EditTeacherForm({ open, setOpen, teacher }) {
  const { teacherid } = useParams();
  const [editTeacher, { isLoading }] = useEditTeacherMutation();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    teachername: "",
    fathername: "",
    mothername: "",
    dob: "",
    religion: "",
    phone: "",
    email: "",
    file: null,
    faculty: { depart: "", role: "" },
    presentaddress: {
      upozilla: "",
      district: "",
      division: "",
      postcode: "",
    },
    permanentaddress: {
      upozilla: "",
      district: "",
      division: "",
      postcode: "",
    },
    teacherid: "",
  });



  useEffect(() => {
    if (teacher) {
      setFormData({
        teachername: teacher.teachername || "",
        fathername: teacher.fathername || "",
        mothername: teacher.mothername || "",
        dob: teacher.dob ? new Date(teacher.dob).toISOString().split("T")[0] : "",
        religion: teacher.religion || "",
        phone: teacher.phone || "",
        email: teacher.email || "",
        file: teacher.teacherProfile || "",
        faculty: {
          depart: teacher.faculty?.depart || "",
          role: teacher.faculty?.role || "",
        },
        presentaddress: {
          upozilla: teacher?.presentaddress?.upozilla || "",
          district: teacher?.presentaddress?.district || "",
          division: teacher?.presentaddress?.division || "",
          postcode: teacher?.presentaddress?.postcode || "",
        },
        permanentaddress: {
          upozilla: teacher?.permanentaddress?.upozilla || "",
          district: teacher?.permanentaddress?.district || "",
          division: teacher?.permanentaddress?.division || "",
          postcode: teacher?.permanentaddress?.postcode || "",
        },
        teacherid: teacher?.teacherid || teacherid || "", // Fallback to URL param
      });
    } else {
      console.error("Teacher data is not available");
    }
  }, [teacher, teacherid]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, file }));
      setFilePreview(URL.createObjectURL(file));
    } else {
      toast.error("Please upload a valid image file.");
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("presentaddress") || name.includes("permanentaddress")) {
      const [addressType, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [addressType]: {
          ...prev[addressType],
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleFacultyChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      faculty: { ...prev.faculty, [name]: value },
    }));
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.teacherid) {
      toast.error("Teacher ID is missing. Please refresh the page and try again.");
      return; // Stop submission if teacherid is missing
    }
  
    const submissionData = new FormData();
    submissionData.append("teachername", formData.teachername);
    submissionData.append("fathername", formData.fathername);
    submissionData.append("mothername", formData.mothername);
    submissionData.append("dob", formData.dob);
    submissionData.append("religion", formData.religion);
    submissionData.append("phone", formData.phone);
    submissionData.append("email", formData.email);
  
    if (formData.presentaddress) {
      submissionData.append("presentupozilla", formData.presentaddress.upozilla);
      submissionData.append("presentdistrict", formData.presentaddress.district);
      submissionData.append("presentdivision", formData.presentaddress.division);
      submissionData.append("presentpostcode", formData.presentaddress.postcode);
    }
  
    if (formData.permanentaddress) {
      submissionData.append("permanentupozilla", formData.permanentaddress.upozilla);
      submissionData.append("permanentdistrict", formData.permanentaddress.district);
      submissionData.append("permanentdivision", formData.permanentaddress.division);
      submissionData.append("permanentpostcode", formData.permanentaddress.postcode);
    }
  
    submissionData.append("teacherid", formData.teacherid);
  
    if (formData.file instanceof File) {
      submissionData.append("file", formData.file);
    }

    for (let pair of submissionData.entries()) {
      const data = (pair[0] + ": " + pair[1]); 
    }
  
    if (formData.faculty) {
      submissionData.append("faculty", JSON.stringify(formData.faculty));
    }
  
    try {
    
      await editTeacher({ teacherid: formData.teacherid, data: formData }).unwrap();
      toast.success("Teacher profile updated successfully");
      navigate("/dashboard/coordinator/teacher");
    } catch (error) {
      toast.error(error.data?.message || "Failed to update teacher profile");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[800px] w-full h-[450px] overflow-auto">
        <DialogHeader>
          <DialogTitle>Edit Teacher Profile</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 text-gray-700" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-32 h-32 relative cursor-pointer" onClick={handleImageClick}>
              {formData.file ? (
                <img src={formData.file} alt="Profile Preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-gray-600 rounded-md">
                  No Image
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
              <div className="flex flex-col">
                <label>Name:</label>
                <input
                  type="text"
                  name="teachername"
                  value={formData.teachername}
                  onChange={handleChange}
                  className="bg-slate-200 p-1 outline-none"
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col">
                <label>Father's Name:</label>
                <input
                  type="text"
                  name="fathername"
                  value={formData.fathername}
                  onChange={handleChange}
                  className="bg-slate-200 p-1 outline-none"
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col">
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-200 p-1 outline-none"
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col">
                <label>Date of Birth:</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="bg-slate-200 p-1 outline-none"
                  disabled={isLoading}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <label>Religion:</label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="bg-slate-200 p-1 outline-none"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col">
              <label>Phone:</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-slate-200 p-1 outline-none"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col">
              <label>Department:</label>
              <input
                type="text"
                name="depart"
                value={formData.faculty.depart}
                onChange={handleFacultyChange}
                className="bg-slate-200 p-1 outline-none"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col">
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={formData.faculty.role}
                onChange={handleFacultyChange}
                className="bg-slate-200 p-1 outline-none"
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold">Address Information</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <h2 className="text-gray-800 py-2 font-semibold">Present Address</h2>
                <div className="flex flex-col">
                  <label>Upozilla</label>
                  <input
                    type="text"
                    name="presentaddress.upozilla"
                    value={formData.presentaddress.upozilla}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your upozilla"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>District</label>
                  <input
                    type="text"
                    name="presentaddress.district"
                    value={formData.presentaddress.district}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your district"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Division</label>
                  <input
                    type="text"
                    name="presentaddress.division"
                    value={formData.presentaddress.division}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your division"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Post code</label>
                  <input
                    type="text"
                    name="presentaddress.postcode"
                    value={formData.presentaddress.postcode}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your postcode"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="text-gray-800 py-2 font-semibold">Permanent Address</h2>
                <div className="flex flex-col">
                  <label>Upozilla</label>
                  <input
                    type="text"
                    name="permanentaddress.upozilla"
                    value={formData.permanentaddress.upozilla}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your upozilla"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>District</label>
                  <input
                    type="text"
                    name="permanentaddress.district"
                    value={formData.permanentaddress.district}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your district"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Division</label>
                  <input
                    type="text"
                    name="permanentaddress.division"
                    value={formData.permanentaddress.division}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your division"
                    disabled={isLoading}
                  />
                </div>
                <div className="flex flex-col">
                  <label>Post code</label>
                  <input
                    type="text"
                    name="permanentaddress.postcode"
                    value={formData.permanentaddress.postcode}
                    onChange={handleChange}
                    className="bg-slate-200 p-1 outline-none"
                    placeholder="Enter your postcode"
                    disabled={isLoading}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="px-6 py-2 rounded-2xl bg-blue-700 text-white mt-4"
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </form>

      </DialogContent>
    </Dialog>
  );
}