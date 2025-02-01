import React from 'react'

export default function PortalmainContent() {
    
        // Student Information
        const student = {
            id: "202412345678",
            name: "John Doe",
            department: "Software Engineering",
            batch: 70,
            status: "Enrolled",
            admissionDate: "January 10, 2024",
            completedCredits: 30,
            cgpa: 3.75,
        };
    
        // Registered Courses Data
        const courses = [
            { code: "SWE-2101", title: "Data Structures", credit: 3, faculty: "Dr. Sarah Miller", grade: "A-" },
            { code: "SWE-2102", title: "Algorithms", credit: 3, faculty: "Dr. James Smith", grade: "B+" },
            { code: "SWE-2103", title: "Database Systems", credit: 3, faculty: "Dr. Emily Johnson", grade: "A" },
            { code: "SWE-2104", title: "Operating Systems", credit: 3, faculty: "Dr. William Brown", grade: "B" },
            { code: "SWE-2105", title: "Web Development", credit: 3, faculty: "Dr. Michael Lee", grade: "A+" },
        ];
    
  return (
    <div>
     <div className="flex-1 p-2 md:p-6">
                {/* Student Summary */}
                <div className="bg-white shadow p-4 rounded mb-4">
                    <h2 className="md:text-xl text-md font-bold mb-2">Student Summary</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-4 text-xs md:text-md">
                        <p><strong>ID:</strong> {student.id}</p>
                        <p><strong>Name:</strong> {student.name}</p>
                        <p><strong>Department:</strong> {student.department}</p>
                        <p><strong>Batch:</strong> {student.batch}</p>
                        <p><strong>Status:</strong> <span className="text-green-600">{student.status}</span></p>
                        <p><strong>Admission Date:</strong> {student.admissionDate}</p>
                        <p><strong>Completed Credits:</strong> {student.completedCredits}</p>
                        <p><strong>CGPA:</strong> {student.cgpa}</p>
                    </div>
                </div>

                {/* Registered Courses */}
                <div className="bg-white shadow p-4 rounded mb-4 overflow-x-auto">
                    <h2 className="md:text-xl text-sm font-bold mb-2">Registered Courses</h2>
                    <table className="w-full border border-gray-200 text-xs md:text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">Code</th>
                                <th className="border border-gray-300 p-2">Title</th>
                                <th className="border border-gray-300 p-2">Credit</th>
                                <th className="border border-gray-300 p-2">Faculty</th>
                                <th className="border border-gray-300 p-2">Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.code} className="text-center">
                                    <td className="border border-gray-300 p-2">{course.code}</td>
                                    <td className="border border-gray-300 p-2 text-left">{course.title}</td>
                                    <td className="border border-gray-300 p-2">{course.credit}</td>
                                    <td className="border border-gray-300 p-2 text-left">{course.faculty}</td>
                                    <td className="border border-gray-300 p-2 font-bold">{course.grade}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Notifications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-yellow-100 p-4 rounded shadow">
                        <h2 className="font-bold text-lg mb-2">Payment Status</h2>
                        <p>No pending payments.</p>
                    </div>

                    <div className="bg-red-100 p-4 rounded shadow">
                        <h2 className="font-bold text-lg mb-2">Important Notice</h2>
                        <p>Course registration for next semester starts on March 1st.</p>
                    </div>

                    <div className="bg-green-100 p-4 rounded shadow">
                        <h2 className="font-bold text-lg mb-2">Library Status</h2>
                        <p>All books returned, no pending fines.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
