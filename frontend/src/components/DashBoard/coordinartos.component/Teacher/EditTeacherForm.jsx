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

  // Form state initialization
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
  });

  // For file preview
  const [filePreview, setFilePreview] = useState(null);

  // Populate form fields if teacher data is passed
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
        file: null,
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
      });

      if (teacher.teacherProfile) {
        setFilePreview(teacher.teacherProfile); // Set file preview if available
      }
    }
  }, [teacher]);

  // Handle file change (Profile Picture)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, file }));
      setFilePreview(URL.createObjectURL(file)); // Preview the image
    }
  };

  // Trigger file input on image click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Handle form data change for both basic and address fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('presentaddress') || name.includes('permanentaddress')) {
      const [addressType, field] = name.split('.');
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

  // Handle faculty-specific fields
  const handleFacultyChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      faculty: { ...prev.faculty, [name]: value },
    }));
  };

  // Submit handler for the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();

    // Append fields to FormData
    submissionData.append("teachername", formData.teachername);
    submissionData.append("fathername", formData.fathername);
    submissionData.append("mothername", formData.mothername);
    submissionData.append("dob", formData.dob);
    submissionData.append("religion", formData.religion);
    submissionData.append("phone", formData.phone);
    submissionData.append("email", formData.email);
    submissionData.append("presentupozilla", formData.presentaddress?.upozilla);
    submissionData.append("presentdistrict", formData.presentaddress?.district);
    submissionData.append("presentdivision", formData.presentaddress?.division);
    submissionData.append("presentpostcode", formData.presentaddress?.postcode);
    submissionData.append("permanentupozilla", formData.permanentaddress?.upozilla);
    submissionData.append("permanentdistrict", formData.permanentaddress?.district);
    submissionData.append("permanentdivision", formData.permanentaddress?.division);
    submissionData.append("permanentpostcode", formData.permanentaddress?.postcode);

    // Append the file (only if it's selected)
    if (formData.file instanceof File) {
      submissionData.append("file", formData.file);
    }

    // Append the faculty object as a JSON string
    submissionData.append("faculty", JSON.stringify(formData.faculty));

    // Debugging: Log FormData contents
    for (let pair of submissionData.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      // Call mutation to update teacher data
      await editTeacher({ teacherid, data: submissionData }).unwrap();
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
            {/* Profile Picture Preview */}
            <div className="w-32 h-32 relative cursor-pointer" onClick={handleImageClick}>
              {filePreview ? (
                <img src={filePreview} alt="Profile Preview" className="w-full h-full object-cover rounded-md" />
              ) : (
                <div className="w-32 h-32 bg-gray-300 flex items-center justify-center text-gray-600 rounded-md">
                  No Image
                </div>
              )}
              {/* Hidden File Input */}
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
            </div>

            {/* Basic Information Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
              <div className="flex flex-col">
                <label>Name:</label>
                <input type="text" name="teachername" value={formData.teachername} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
              </div>

              <div className="flex flex-col">
                <label>Father's Name:</label>
                <input type="text" name="fathername" value={formData.fathername} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
              </div>

              <div className="flex flex-col">
                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
              </div>

              <div className="flex flex-col">
                <label>Date of Birth:</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
              </div>
            </div>
          </div>

          {/* Additional Fields */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="flex flex-col">
              <label>Religion:</label>
              <input type="text" name="religion" value={formData.religion} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
            </div>

            <div className="flex flex-col">
              <label>Phone:</label>
              <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="bg-slate-200 p-1 outline-none" />
            </div>

            <div className="flex flex-col">
              <label>Department:</label>
              <input type="text" name="depart" value={formData.faculty.depart} onChange={handleFacultyChange} className="bg-slate-200 p-1 outline-none" />
            </div>

            <div className="flex flex-col">
              <label>Role:</label>
              <input type="text" name="role" value={formData.faculty.role} onChange={handleFacultyChange} className="bg-slate-200 p-1 outline-none" />
            </div>
          </div>

          {/* Address information */}
          <div>
            <h1 className="text-lg font-semibold">Address Information</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col">
                <h2 className="text-gray-800 py-2 font-semibold">Present Address</h2>
                <div className="flex flex-col">
                  <label>Upozilla</label>
                  <input type="text" name="presentaddress.upozilla" value={formData.presentaddress.upozilla} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your upozilla" />
                </div>
                <div className="flex flex-col">
                  <label>District</label>
                  <input type="text" name="presentaddress.district" value={formData.presentaddress.district} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your district" />
                </div>
                <div className="flex flex-col">
                  <label>Divition</label>
                  <input type="text" name="presentaddress.division" value={formData.presentaddress.division} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your division" />
                </div>
                <div className="flex flex-col">
                  <label>Post code</label>
                  <input type="text" name="presentaddress.postcode" value={formData.presentaddress.postcode} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your postcode" />
                </div>
              </div>

              <div className="flex flex-col">
                <h2 className="text-gray-800 py-2 font-semibold">Permanent Address</h2>
                <div className="flex flex-col">
                  <label>Upozilla</label>
                  <input type="text" name="permanentaddress.upozilla" value={formData.permanentaddress.upozilla} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your upozilla" />
                </div>
                <div className="flex flex-col">
                  <label>District</label>
                  <input type="text" name="permanentaddress.district" value={formData.permanentaddress.district} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your district" />
                </div>
                <div className="flex flex-col">
                  <label>Divition</label>
                  <input type="text" name="permanentaddress.division" value={formData.permanentaddress.division} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your division" />
                </div>
                <div className="flex flex-col">
                  <label>Post code</label>
                  <input type="text" name="permanentaddress.postcode" value={formData.permanentaddress.postcode} onChange={handleChange} className="bg-slate-200 p-1 outline-none" placeholder="Enter your postcode" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="px-6 py-2 rounded-2xl bg-blue-700 text-white mt-4" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
