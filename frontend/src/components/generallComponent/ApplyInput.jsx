import React, { useState } from 'react';
import { useStudentRegisterMutation } from '../../redux/BustudentApi';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "../../utils/validationSchema"


export default function ApplyInput() {

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
    name: '',
    fatherName: '',
    motherName: '',
    village: '',
    upozilla: '',
    district: '',
    division: '',
    sscResult: null,
    hscResult: null,
    department: '',
    desiredDepartment: '',
    presentGuardian: '',
    religion: '',
    ownNumber: null,
    guardianNumber: null,
    email: '',
    admissionroll: '',
    file: null,
  });
  
  const { register, handleSubmit, setValue, formState: { errors }} = useForm({ resolver: zodResolver(studentSchema)});
  const [studentRegister, { isLoading, error, data }] = useStudentRegisterMutation();
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // For numeric fields like sscResult and hscResult, ensure the value is a number
    if (name === 'sscResult' || name === 'hscResult') {
      // Convert the string to a number if the value is not empty
      setFormData((prevState) => ({
        ...prevState,
        [name]: value ? parseFloat(value) : null, // Ensure it is a number or null if empty
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  
  
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    
    if (selectedFile) {
      setFormData((prevState) => ({
        ...prevState,
        file: selectedFile,
      }));
    }
  };
  
  
  const handleSubmitForm = async (data) => {
    console.log('Form Data:', data);
  
    const formDataToSend = new FormData();
    Object.keys(data).forEach((key) => {
      formDataToSend.append(key, data[key]);
    });
  
    // If you have a file, append it as well
    if (formData.file) {
      formDataToSend.append("file", formData.file);
    } else {
      console.error("File is not selected.");
      return;
    }
  
    try {
      await studentRegister(formDataToSend);
      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };
  
  
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Bangladesh University Admission Form</h2>

      <form onSubmit={handleSubmit(handleSubmitForm)} className='flex flex-col gap-2'>

        {/* Personal Information Section */}


        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>

          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              {...register("name")}
              value={formData.name}
              placeholder="Enter your full name"
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-xs py-2">{errors.name.message}</p>}
            
          </div>

          <div className="mb-4">
            <label htmlFor="fatherName" className="block text-lg font-medium text-gray-700">Father's Name</label>
            <input
              id="fatherName"
              name="fatherName"
              {...register("fatherName")}
              type="text"
              placeholder="Enter your father's name"
              value={formData.fatherName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.fatherName && <p className="text-red-500 text-xs py-2">{errors.fatherName.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="motherName" className="block text-lg font-medium text-gray-700">Mother's Name</label>
            <input
              id="motherName"
              name="motherName"
              {...register("motherName")}
              type="text"
              placeholder="Enter your mother's name"
              value={formData.motherName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.motherName && <p className="text-red-500 text-xs py-2">{errors.motherName.message}</p>}
          </div>

        </div>


        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2">
        {/* Address Section */}
        <div className="mb-4">
          <label htmlFor="village" className="block text-lg font-medium text-gray-700">Village</label>
          <input
            id="village"
            name="village"
            {...register("village")}
            type="text"
            placeholder="Enter your village"
            value={formData.village}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
          />
          {errors.village && <p className="text-red-500 text-xs py-2">{errors.village.message}</p>}
        </div>

      <div className="mb-4">
        <label htmlFor="division" className="block text-lg font-medium text-gray-700">Division</label>
        <select
          id="division"
          name="division"
          {...register("division")}
          value={formData.division}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        >
          <option value="">Select Division</option>
          {bangladeshLocations.map((location) => (
            <option key={location.division} value={location.division}>
              {location.division}
            </option>
          ))}
        </select>
        {errors.village && <p className="text-red-500 text-xs py-2">{errors.village.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="district" className="block text-lg font-medium text-gray-700">District</label>
        <select
          id="district"
          name="district"
          {...register("district")}
          value={formData.district}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        >
          <option value="">Select District</option>
          {bangladeshLocations
            .find((location) => location.division === formData.division)
            ?.districts.map((district) => (
              <option key={district.district} value={district.district}>
                {district.district}
              </option>
            ))}
        </select>
        {errors.district && <p className="text-red-500 text-xs py-2">{errors.district.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="upozilla" className="block text-lg font-medium text-gray-700">Upojilla</label>
        <select
          id="upozilla"
          name="upozilla"
          {...register("upozilla")}
          value={formData.upozilla}
          onChange={handleChange}
          className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
        >
            <option value="">Select Upojilla</option>
            {bangladeshLocations
              .find((location) => location.division === formData.division)
              ?.districts.find((district) => district.district === formData.district)
              ?.upazilas.map((upazila) => (
                <option key={upazila} value={upazila}>
                  {upazila}
                </option>
              ))}
          </select>
          {errors.upozilla && <p className="text-red-500 text-xs py-2">{errors.upozilla.message}</p>}
        </div>
      </div>



        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2'>
          {/* Academic Information */}

          <div className="mb-4">
            <label htmlFor="sscResult" className="block text-lg font-medium text-gray-700">SSC Result</label>
            <input
              id="sscResult"
              name="sscResult"
              {...register("sscResult", { valueAsNumber: true })}  // Ensure that the value is treated as a number
              type="number"
              placeholder="Enter your SSC result"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.sscResult && <p className="text-red-500 text-xs py-2">{errors.sscResult.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="hscResult" className="block text-lg font-medium text-gray-700">HSC Result</label>
            <input
              id="hscResult"
              name="hscResult"
              {...register("hscResult", { valueAsNumber: true })}  // Ensure that the value is treated as a number
              type="number"
              placeholder="Enter your HSC result"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.hscResult && <p className="text-red-500 text-xs py-2">{errors.hscResult.message}</p>}
          </div>


          <div className="mb-4">
            <label htmlFor="department" className="block text-lg font-medium text-gray-700">Previous Department </label>
            <select
              id="department"
              name="department"
              {...register("department")}
              value={formData.department}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            >
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
            </select>
            {errors.department && <p className="text-red-500 text-xs py-2">{errors.department.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="desiredDepartment" className="block text-lg font-medium text-gray-700">Dirser Department</label>
            <select
              id="desiredDepartment"
              name="desiredDepartment"
              {...register("desiredDepartment")}
              value={formData.desiredDepartment}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            >
              <option value="computerScience">Computer Science</option>
              <option value="electricalEngineering">Electrical Engineering</option>
              <option value="mechanicalEngineering">Mechanical Engineering</option>
              <option value="civilEngineering">Civil Engineering</option>
              <option value="civilEngineering">Pharmacy</option>
              <option value="civilEngineering">Department of Law</option>
              <option value="civilEngineering">Business Admistration</option>
              <option value="civilEngineering">Economic </option>
              <option value="civilEngineering">Math </option>
              <option value="civilEngineering">English </option>
              <option value="civilEngineering">Sosology </option>
              <option value="civilEngineering">Arghtecture </option>
            </select>
            {errors.desiredDepartment && <p className="text-red-500 text-xs py-2">{errors.desiredDepartment.message}</p>}
          </div>

          <div className="mb-4">
          <label htmlFor="admissionroll" className="block text-lg font-medium text-gray-700">Admission Role</label>
            <select
              id="admissionroll"
              name="admissionroll"
              {...register("admissionroll")}
              value={formData.admissionroll}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            >
              <option value="science">Under Graduation</option>
              <option value="arts">Post Graduation</option>
              <option value="commerce">Diploma in Under Graduation</option>
              <option value="commerce">Diploma in Post Graduation</option>
            </select>
            {errors.admissionroll && <p className="text-red-500 text-xs py-2">{errors.admissionroll.message}</p>}
          </div>

          <div>
            <label htmlFor="file-upload" className="block text-lg font-medium text-gray-700 mb-2">
              Upload Image
            </label>
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              {...register("file")}
              name="file"
              // handleFileChange can still be used if you need extra logic
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            />
            {errors.file && <p className="text-red-500 text-xs py-2">{errors.file.message}</p>}
          </div>


        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2'>

          {/* Contact and Misc Information */}
          <div className="mb-4">
            <label htmlFor="presentGuardian" className="block text-lg font-medium text-gray-700">Present Guardian</label>
            <input
              id="presentGuardian"
              name="presentGuardian"
              {...register("presentGuardian")}
              type="text"
              placeholder="Enter present guardian's name"
              value={formData.presentGuardian}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.presentGuardian && <p className="text-red-500 text-xs py-2">{errors.presentGuardian.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="religion" className="block text-lg font-medium text-gray-700">Religion</label>
            <input
              id="religion"
              name="religion"
              {...register("religion")}
              type="text"
              placeholder="Enter your religion"
              value={formData.religion}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.religion && <p className="text-red-500 text-xs py-2">{errors.religion.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="ownNumber" className="block text-lg font-medium text-gray-700">Own Number</label>
            <input
              id="ownNumber"
              name="ownNumber"
              {...register("ownNumber")}
              type="tel"
              placeholder="Enter your phone number"
              value={formData.ownNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.ownNumber && <p className="text-red-500 text-xs py-2">{errors.ownNumber.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="guardianNumber" className="block text-lg font-medium text-gray-700">Guardian Number</label>
            <input
              id="guardianNumber"
              name="guardianNumber"
              {...register("guardianNumber")}
              type="tel"
              placeholder="Enter guardian's phone number"
              value={formData.guardianNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.guardianNumber && <p className="text-red-500 text-xs py-2">{errors.guardianNumber.message}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              id="email"
              name="email"
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-xs py-2">{errors.email.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 md:w-[40%] mx-auto text-white p-2 rounded-lg"
          disabled={isLoading}
        >
          {isLoading ? 'Submitting...' : 'Submit'}
        </button>

      </form>
    </div>
  );
} 