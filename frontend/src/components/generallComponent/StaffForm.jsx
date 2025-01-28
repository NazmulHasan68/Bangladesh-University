import React, { useState } from 'react';

export default function StaffForm() {

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
        graduation_cgpa: '',
        post_graduation_cgpa: '',
        department: '',
        desiredDepartment: '',
        file: null,
        graduation_university: '',
        post_graduation_university: '',
        nid: '',
        nationality: '',
        dob: '',
        joindept:'',
        roll:'',
        subject: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFormData((prevState) => ({
            ...prevState,
            file: selectedFile,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Bangladesh University Staff Form</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="fatherName" className="block text-lg font-medium text-gray-700">Father's Name</label>
                        <input
                            id="fatherName"
                            name="fatherName"
                            type="text"
                            placeholder="Enter your father's name"
                            value={formData.fatherName}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="motherName" className="block text-lg font-medium text-gray-700">Mother's Name</label>
                        <input
                            id="motherName"
                            name="motherName"
                            type="text"
                            placeholder="Enter your mother's name"
                            value={formData.motherName}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="village" className="block text-lg font-medium text-gray-700">Village</label>
                        <input
                            id="village"
                            name="village"
                            type="text"
                            placeholder="Enter your village"
                            value={formData.village}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="division" className="block text-lg font-medium text-gray-700">Division</label>
                        <select
                            id="division"
                            name="division"
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
                    </div>
                    <div className="mb-4">
                        <label htmlFor="district" className="block text-lg font-medium text-gray-700">District</label>
                        <select
                            id="district"
                            name="district"
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
                    </div>
                    <div className="mb-4">
                        <label htmlFor="upozilla" className="block text-lg font-medium text-gray-700">Upojilla</label>
                        <select
                            id="upozilla"
                            name="upozilla"
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
                    </div>
                </div>

                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2">
                    <div className="mb-4">
                        <label htmlFor="hsc_college" className="block text-lg font-medium text-gray-700">HSC College</label>
                        <input
                            id="hsc_college"
                            name="hsc_college"
                            type="text"
                            placeholder="Enter your college name"
                            value={formData.graduation_university}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hsc_gpa" className="block text-lg font-medium text-gray-700">GPA</label>
                        <input
                            id="hsc_gpa"
                            name="hsc_gpa"
                            type="number"
                            placeholder="Enter HSC point"
                            value={formData.graduation_cgpa}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hsc_scholl" className="block text-lg font-medium text-gray-700">SSC school</label>
                        <input
                            id="hsc_scholl"
                            name="hsc_scholl"
                            type="text"
                            placeholder="Enter Post Graduation CGPA"
                            value={formData.post_graduation_cgpa}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="ssc_point" className="block text-lg font-medium text-gray-700">SSC Point</label>
                        <input
                            id="ssc_point"
                            name="ssc_point"
                            type="Number"
                            placeholder="Enter point"
                            value={formData.post_graduation_university}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nid" className="block text-lg font-medium text-gray-700">NID Card Number</label>
                        <input
                            id="nid"
                            name="nid"
                            type="number"
                            placeholder="Enter your NID card number"
                            value={formData.nid}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="nationality" className="block text-lg font-medium text-gray-700">Nationality</label>
                        <input
                            id="nationality"
                            name="nationality"
                            type="text"
                            placeholder="Enter your nationality"
                            value={formData.nationality}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="dob" className="block text-lg font-medium text-gray-700">Date of Birth</label>
                        <input
                            id="dob"
                            name="dob"
                            type="date"
                            value={formData.join}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="file" className="block text-lg font-medium text-gray-700">Upload your file</label>
                        <input
                            id="file"
                            name="file"
                            type="file"
                            onChange={handleFileChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                        />
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="roll" className="block text-lg font-medium text-gray-700">Join as a</label>
                            <select
                            id="roll"
                            name="roll"
                            value={formData.roll}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                            >
                                <option value="department_head">Senior Driver</option>
                                <option value="senior_professor">Junior Driver</option>
                                <option value="junior_professor">Cleaner</option>
                                <option value="assistant_professor">Gardener</option>
                                <option value="professor">Shafe</option>
                                <option value="administration">Helper</option>
                                <option value="accountant">Work Assistance</option>
                                <option value="admission_section">Office Man</option>
                                <option value="office_assistant">Ground Man</option>
                                <option value="event_management">Event Management</option>
                                <option value="night_watchman">Night Watch Man</option>
                                <option value="porter">Porter</option>
                                <option value="mechanic">Mechanic</option>
                                <option value="electrician">Electrician</option>
                                <option value="plumber">Plumber</option>
                                <option value="social_media_manager">Social Media Manager</option>

                            </select>
                    </div>

                    <div className='mb-4'>
                        <label htmlFor="joindept" className="block text-lg font-medium text-gray-700">Join Department</label>
                            <select
                            id="joindept"
                            name="joindept"
                            value={formData.joindept}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                            >
                                <option value="computerScience">Computer Science</option>
                                <option value="electricalEngineering">Electrical Engineering</option>
                                <option value="mechanicalEngineering">Mechanical Engineering</option>
                                <option value="civilEngineering">Civil Engineering</option>
                                <option value="pharmacy">Pharmacy</option>
                                <option value="departmentOfLaw">Department of Law</option>
                                <option value="businessAdministration">Business Administration</option>
                                <option value="economics">Economics</option>
                                <option value="mathematics">Mathematics</option>
                                <option value="english">English</option>
                                <option value="sociology">Sociology</option>
                                <option value="architecture">Architecture</option>
                                <option value="librarian">Librarian</option>

                            </select>
                    </div>
                </div>

                    


                <button
                    type="submit"
                    className="mx-auto px-40 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
