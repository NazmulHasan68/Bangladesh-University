import React, { useEffect, useState } from 'react';
import { useUpdateStudentsAddressByIdMutation } from '../../../../redux/BustudentApi';
import { toast } from 'react-toastify';

export default function AddressInformation({ studentById }) {
    const [updateStudent, { isLoading }] = useUpdateStudentsAddressByIdMutation();

    const [formData, setFormData] = useState({
        permanentaddress: {
            village: '',
            upozilla: '',
            district: '',
            division: '',
            postcode: ''
        },
        presentaddress: {
            village: '',
            upozilla: '',
            district: '',
            division: '',
            postcode: ''
        }
    });

    useEffect(() => {
        if (studentById) {
            setFormData({
                permanentaddress: studentById.permanentaddress?.[0] || {
                    village: '',
                    upozilla: '',
                    district: '',
                    division: '',
                    postcode: ''
                },
                presentaddress: studentById.presentaddress?.[0] || {
                    village: '',
                    upozilla: '',
                    district: '',
                    division: '',
                    postcode: ''
                }
            });
        }
    }, [studentById]);

    const handleChange = (e, addressType) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [addressType]: {
                ...prevState[addressType],
                [name]: value
            }
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!studentById?._id) {
            toast.error("Student ID is missing!");
            return;
        }
    
        const updatedFormData = {
            studentid: studentById.studentid,
            permanentaddress: JSON.stringify(formData.permanentaddress),
            presentaddress: JSON.stringify(formData.presentaddress)
        };
    
        try {
            await updateStudent(updatedFormData).unwrap();
            toast.success("Address information updated successfully!");
        } catch (error) {
            toast.error("Failed to update address!");
            console.error(error);
        }
    };
    
    
    return (
        <form onSubmit={handleSubmit} className="w-full p-4 rounded-2xl bg-slate-50 shadow-md mt-4">
            <h1 className="text-md md:text-xl font-semibold text-gray-700">Address Information</h1>
            
            <div className="flex flex-row gap-2 mt-2">
                {/* Present Address */}
                <div className="basis-1/2">
                    <h2 className="text-sm md:text-md font-semibold text-gray-700 py-2">Present Address</h2>
                    {["village", "upozilla", "district", "division", "postcode"].map((field) => (
                        <div key={field}>
                            <label htmlFor={`present-${field}`} className="block text-sm text-gray-600 capitalize">
                                {field}
                            </label>
                            <input
                                type={field === "postcode" ? "number" : "text"}
                                id={`present-${field}`}
                                name={field}
                                value={formData.presentaddress[field]}
                                onChange={(e) => handleChange(e, 'presentaddress')}
                                placeholder={field}
                                className="rounded w-full mb-2 focus:outline-none bg-transparent pl-2 p-1 bg-gray-50 text-gray-400"
                            />
                        </div>
                    ))}
                </div>

                {/* Permanent Address */}
                <div className="basis-1/2">
                    <h2 className="text-sm md:text-md font-semibold text-gray-700 py-2">Permanent Address</h2>
                    {["village", "upozilla", "district", "division", "postcode"].map((field) => (
                        <div key={field}>
                            <label htmlFor={`permanent-${field}`} className="block text-sm text-gray-600 capitalize">
                                {field}
                            </label>
                            <input
                                type={field === "postcode" ? "number" : "text"}
                                id={`permanent-${field}`}
                                name={field}
                                value={formData.permanentaddress[field]}
                                onChange={(e) => handleChange(e, 'permanentaddress')}
                                placeholder={field}
                                className="rounded w-full mb-2 focus:outline-none bg-transparent pl-2 p-1 bg-gray-50 text-gray-400"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-right">
                <button 
                    type="submit" 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4"
                    disabled={isLoading}
                >
                    {isLoading ? "Updating..." : "Update Information"}
                </button>
            </div>
        </form>
    );
}




