import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTeacherRegistrationMutation } from "../../../../redux/BuTeacherApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function TeacherApplyForm({ open, setOpen }) {
  const bangladeshLocations = [
    {
      division: "Barisal",
      districts: [
        {
          district: "Barisal",
          upazilas: ["Barisal Sadar", "Bakerganj", "Babuganj", "Banaripara", "Muladi", "Hizla", "Mehendiganj"],
        },
        {
          district: "Bhola",
          upazilas: ["Bhola Sadar", "Char Fasson", "Daulatkhan", "Lalmohan", "Manpura", "Tazumuddin"],
        },
        {
          district: "Jhalokati",
          upazilas: ["Jhalokati Sadar", "Kathalia", "Nalchity", "Rajapur"],
        },
        {
          district: "Patuakhali",
          upazilas: ["Patuakhali Sadar", "Bauphal", "Dashmina", "Galachipa", "Kalapara", "Rangabali", "Mirzaganj"],
        },
        {
          district: "Pirojpur",
          upazilas: ["Pirojpur Sadar", "Bhandaria", "Kawkhali", "Mathbaria", "Nazirpur", "Nesarabad", "Zianagar"],
        },
      ],
    },
    {
      division: "Chittagong",
      districts: [
        {
          district: "Chittagong",
          upazilas: ["Chittagong Sadar", "Anwara", "Banshkhali", "Boalkhali", "Fatikchhari", "Hathazari", "Lohagara", "Mirsharai", "Patiya", "Rangunia", "Raozan", "Sandwip", "Satkania", "Sitakunda"],
        },
        {
          district: "Cox's Bazar",
          upazilas: ["Cox's Bazar Sadar", "Chakaria", "Maheshkhali", "Ramu", "Teknaf", "Ukhia", "Kutubdia"],
        },
        {
          district: "Bandarban",
          upazilas: ["Bandarban Sadar", "Thanchi", "Ruma", "Rowangchhari", "Lama", "Ali Kadam", "Naikhongchhari"],
        },
        {
          district: "Rangamati",
          upazilas: ["Rangamati Sadar", "Bagaichhari", "Barkal", "Kaptai", "Juraichhari", "Langadu", "Rajasthali", "Belaichhari"],
        },
        {
          district: "Khagrachari",
          upazilas: ["Khagrachari Sadar", "Dighinala", "Lakshmichhari", "Mahalchhari", "Manikchhari", "Matiranga", "Panchhari", "Ramgarh"],
        },
        {
          district: "Feni",
          upazilas: ["Feni Sadar", "Chhagalnaiya", "Daganbhuiyan", "Parshuram", "Fulgazi", "Sonagazi"],
        },
        {
          district: "Noakhali",
          upazilas: ["Noakhali Sadar", "Begumganj", "Chatkhil", "Companiganj", "Hatiya", "Senbagh", "Subarnachar"],
        },
        {
          district: "Lakshmipur",
          upazilas: ["Lakshmipur Sadar", "Raipur", "Ramganj", "Ramgati", "Kamalnagar"],
        },
      ],
    },
    {
      division: "Dhaka",
      districts: [
        {
          district: "Dhaka",
          upazilas: ["Dhamrai", "Dohar", "Keraniganj", "Nawabganj", "Savar"],
        },
        {
          district: "Gazipur",
          upazilas: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
        },
        {
          district: "Manikganj",
          upazilas: ["Manikganj Sadar", "Daulatpur", "Ghior", "Harirampur", "Saturia", "Shibalaya", "Singair"],
        },
        {
          district: "Munshiganj",
          upazilas: ["Munshiganj Sadar", "Gazaria", "Lohajang", "Sirajdikhan", "Sreenagar", "Tongibari"],
        },
        {
          district: "Narayanganj",
          upazilas: ["Narayanganj Sadar", "Araihazar", "Bandar", "Rupganj", "Sonargaon"],
        },
        {
          district: "Narsingdi",
          upazilas: ["Narsingdi Sadar", "Belabo", "Monohardi", "Palash", "Raipura", "Shibpur"],
        },
      ],
    },
    {
      division: "Khulna",
      districts: [
        {
          district: "Khulna",
          upazilas: ["Khulna Sadar", "Batiaghata", "Dacope", "Dumuria", "Koyra", "Paikgachha", "Phultala", "Terokhada"],
        },
        {
          district: "Bagerhat",
          upazilas: ["Bagerhat Sadar", "Chitalmari", "Fakirhat", "Kachua", "Mollahat", "Mongla", "Rampal", "Sarankhola"],
        },
        {
          district: "Satkhira",
          upazilas: ["Satkhira Sadar", "Assasuni", "Debhata", "Kalaroa", "Kaliganj", "Shyamnagar", "Tala"],
        },
      ],
    },
    {
      division: "Rajshahi",
      districts: [
        {
          district: "Rajshahi",
          upazilas: ["Rajshahi Sadar", "Bagha", "Bagmara", "Charghat", "Durgapur", "Godagari", "Mohanpur", "Paba", "Puthia", "Tanore"],
        },
        {
          district: "Natore",
          upazilas: ["Natore Sadar", "Bagatipara", "Baraigram", "Gurudaspur", "Lalpur", "Singra"],
        },
        {
          district: "Pabna",
          upazilas: ["Pabna Sadar", "Atgharia", "Bera", "Bhangura", "Chatmohar", "Faridpur", "Ishwardi", "Santhia", "Sujanagar"],
        },
      ],
    },
    {
      division: "Rangpur",
      districts: [
        {
          district: "Rangpur",
          upazilas: ["Rangpur Sadar", "Badarganj", "Gangachara", "Kaunia", "Mithapukur", "Pirgachha", "Pirganj", "Taraganj"],
        },
      ],
    },
    {
      division: "Sylhet",
      districts: [
        {
          district: "Sylhet",
          upazilas: ["Sylhet Sadar", "Balaganj", "Beanibazar", "Bishwanath"],
        },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    teachername: '',
    fatherName: '',
    motherName: '',
    dob: '',
    religion: '',
    phone: null,
    email: '',
    file: null,
    presentDivision: '',
    presentDistrict: '',
    presentUpazila: '',
    permanentDivision: '',
    permanentDistrict: '',
    permanentUpazila: '',
    graguationversity: '',
    grasubject: '',
    graguationcgpa: '',
    postversity: '',
    postsubject: '',
    postcgpa: '',
    department: '',
    role: '',
  });


  const presentDistricts = bangladeshLocations.find(
    (location) => location.division === formData.presentDivision
  )?.districts || [];

  const presentUpazilas = presentDistricts.find(
    (district) => district.district === formData.presentDistrict
  )?.upazilas || [];

  const permanentDistricts = bangladeshLocations.find(
    (location) => location.division === formData.permanentDivision
  )?.districts || [];

  const permanentUpazilas = permanentDistricts.find(
    (district) => district.district === formData.permanentDistrict
  )?.upazilas || [];


    const [teacherRegistration, { data, error, isLoading }] = useTeacherRegistrationMutation();
    const navigate = useNavigate()

    const handleChange = (e) => {
      const { name, value, files } = e.target;
      if (name === 'file') { 
          setFormData({ ...formData, file: files[0] });
      } else {
          setFormData({ ...formData, [name]: value });
      }
    };


    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const submissionData = new FormData();
  
      Object.keys(formData).forEach((key) => {
          if (key === "file") {
            submissionData.append("file", formData[key]); 
          } else {
              submissionData.append(key, formData[key]);
          }
      });

      console.log([...submissionData]); 
  
      try {
          await teacherRegistration(submissionData); 
          toast.success("Added new Teacher");
          navigate("/dashboard/coordinator/teacher");
      } catch (error) {
          console.error("Error during submission", error); 
      }
  };
  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-[800px] w-full h-[600px] overflow-auto"
        style={{ maxWidth: "800px", maxHeight: "500px", overflow: "auto" }}
      >
        <DialogHeader>
          <DialogTitle>Apply as a Teacher</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4 text-gray-700" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="shadow-md bg-slate-100 p-4 rounded-lg">
            <h1 className="text-gray-800 font-semibold text-xl mb-4">Personal Information</h1>
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div>
                <input
                  type="file"
                  name="file" 
                  onChange={handleChange}
                  className="md:w-28 w-24 h-20 md:h-28 bg-slate-600"
                />
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col">
                  <label htmlFor="teachername">Full Name:</label>
                  <input
                    type="text"
                    id="teachername"
                    name="teachername"
                    value={formData.teachername}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="focus:outline-none p-1 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="fatherName">Father's Name:</label>
                  <input
                    type="text"
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Father's Name"
                    className="focus:outline-none p-1 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="motherName">Mother's Name:</label>
                  <input
                    type="text"
                    id="motherName"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    placeholder="Mother's Name"
                    className="focus:outline-none p-1 border border-gray-300 rounded"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="dob">Date of Birth:</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="focus:outline-none p-1 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-4">
              <div className="flex flex-col">
                <label htmlFor="religion">Religion:</label>
                <input
                  type="text"
                  id="religion"
                  name="religion"
                  value={formData.religion}
                  onChange={handleChange}
                  placeholder="Religion"
                  className="focus:outline-none p-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="focus:outline-none p-1 border border-gray-300 rounded"
                />
                {/* {error.phone && <p className="text-red-500 text-xs py-2">{error.phone.message}</p>} */}
              </div>

              <div className="flex flex-col">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="focus:outline-none p-1 border border-gray-300 rounded"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="department">Department:</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="focus:outline-none p-1 border border-gray-300 rounded"
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="EEE">EEE</option>
                  <option value="MATH">MATH</option>
                  <option value="ARCH">ARCH</option>
                  <option value="BBA">BBA</option>
                  <option value="ECONOMICS">ECONOMICS</option>
                  <option value="LAW">LAW</option>
                  <option value="SOST">SOST</option>
                  <option value="ENGLISH">ENGLISH</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="role">Join As:</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="focus:outline-none p-1 border border-gray-300 rounded"
                >
                  <option value="">Select Role</option>
                  <option value="Senior Teacher">Senior Teacher</option>
                  <option value="Junior Teacher">Junior Teacher</option>
                  <option value="Assistance Teacher">Assistance Teacher</option>
                  <option value="Department Head">Department Head</option>
                  <option value="Part-time Teacher">Part-time Teacher</option>
                  <option value="Extra Teacher">Extra Teacher</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Information Section */}
          <div className="shadow-md bg-slate-100 p-4 rounded-lg">
            <h1 className="text-gray-800 font-semibold text-xl mb-4">Address Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Present Address Section */}
              <div>
                <h1 className="text-xl text-gray-600 font-medium ">Present Address</h1>
                <div className="grid gap-2 grid-cols-1 ">
                  {/* Division */}
                  <div className="flex flex-col flex-grow">
                    <label htmlFor="presentDivision">Division:</label>
                    <select
                      id="presentDivision"
                      name="presentDivision"
                      value={formData.presentDivision}
                      onChange={handleChange}
                      className="focus:outline-none  p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Division</option>
                      {bangladeshLocations.map((location) => (
                        <option key={location.division} value={location.division}>
                          {location.division}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div className="flex flex-col flex-grow">
                    <label htmlFor="presentDistrict">District:</label>
                    <select
                      id="presentDistrict"
                      name="presentDistrict"
                      value={formData.presentDistrict}
                      onChange={handleChange}
                      className="focus:outline-none p-2 border border-gray-300 rounded"
                      disabled={!formData.presentDivision}
                    >
                      <option value="">Select District</option>
                      {presentDistricts.map((district) => (
                        <option key={district.district} value={district.district}>
                          {district.district}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Upazila */}
                  <div className="flex flex-col flex-grow">
                    <label htmlFor="presentUpazila">Upazila:</label>
                    <select
                      id="presentUpazila"
                      name="presentUpazila"
                      value={formData.presentUpazila}
                      onChange={handleChange}
                      className="focus:outline-none p-2 border border-gray-300 rounded"
                      disabled={!formData.presentDistrict}
                    >
                      <option value="">Select Upazila</option>
                      {presentUpazilas.map((upazila) => (
                        <option key={upazila} value={upazila}>
                          {upazila}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Permanent Address Section */}
              <div>
                <h1 className="text-xl text-gray-600 font-medium ">Permanent Address</h1>
                <div className="grid gap-2 grid-cols-1 w-full">
                  {/* Division */}
                  <div className="flex flex-col w-full">
                    <label htmlFor="permanentDivision">Division:</label>
                    <select
                      id="permanentDivision"
                      name="permanentDivision"
                      value={formData.permanentDivision}
                      onChange={handleChange}
                      className="focus:outline-none p-2 border border-gray-300 rounded"
                    >
                      <option value="">Select Division</option>
                      {bangladeshLocations.map((location) => (
                        <option key={location.division} value={location.division}>
                          {location.division}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* District */}
                  <div className="flex flex-col flex-grow">
                    <label htmlFor="permanentDistrict">District:</label>
                    <select
                      id="permanentDistrict"
                      name="permanentDistrict"
                      value={formData.permanentDistrict}
                      onChange={handleChange}
                      className="focus:outline-none p-2 border border-gray-300 rounded"
                      disabled={!formData.permanentDivision}
                    >
                      <option value="">Select District</option>
                      {permanentDistricts.map((district) => (
                        <option key={district.district} value={district.district}>
                          {district.district}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Upazila */}
                  <div className="flex flex-col flex-grow">
                    <label htmlFor="permanentUpazila">Upazila:</label>
                    <select
                      id="permanentUpazila"
                      name="permanentUpazila"
                      value={formData.permanentUpazila}
                      onChange={handleChange}
                      className="focus:outline-none p-2 border border-gray-300 rounded"
                      disabled={!formData.permanentDistrict}
                    >
                      <option value="">Select Upazila</option>
                      {permanentUpazilas.map((upazila) => (
                        <option key={upazila} value={upazila}>
                          {upazila}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Information Section */}
          <div className="shadow-md bg-slate-100 p-4 rounded-lg">
            <h1 className="text-gray-800 font-semibold text-xl mb-4">Educational Information</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div>
                <h1 className="text-gray-700 font-medium py-2 text-lg">Graduation</h1>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="graguationversity">Versity name</label>
                    <input
                      type="text"
                      id="graguationversity"
                      name="graguationversity"
                      value={formData.graguationversity}
                      onChange={handleChange}
                      placeholder="Graguation Versity"
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="grasubject">Subject </label>
                    <input
                      type="text"
                      id="grasubject"
                      name="grasubject"
                      value={formData.grasubject}
                      onChange={handleChange}
                      placeholder="Graguation Subject"
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="graguationcgpa">CGPA </label>
                    <input
                      type="Number"
                      id="graguationcgpa"
                      name="graguationcgpa"
                      value={formData.graguationcgpa}
                      onChange={handleChange}
                      placeholder=""
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-gray-700 font-medium py-2 text-lg">Ph.D</h1>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="postversity">Versity name</label>
                    <input
                      type="text"
                      id="postversity"
                      name="postversity"
                      value={formData.postversity}
                      onChange={handleChange}
                      placeholder="Post Versity"
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="postsubject">Subject </label>
                    <input
                      type="text"
                      id="postsubject"
                      name="postsubject"
                      value={formData.postsubject}
                      onChange={handleChange}
                      placeholder="Graguation Subject"
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="postcgpa">CGPA </label>
                    <input
                      type="Number"
                      id="postcgpa"
                      name="postcgpa"
                      value={formData.postcgpa}
                      onChange={handleChange}
                      placeholder=""
                      className="focus:outline-none p-1 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" className="px-6 py-2 rounded-2xl bg-blue-700 text-white mx-auto md:w-[50%] hover:bg-blue-800 "> Submit</button>
        </form>
      </DialogContent>
    </Dialog>
  );
}