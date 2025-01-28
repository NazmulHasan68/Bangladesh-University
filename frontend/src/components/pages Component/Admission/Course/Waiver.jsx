import React, { useState } from 'react';

export default function Waiver() {
    const details = [
        { course: "bba", courseTitle: "BBA (135 Cr. in 12 Semester)", coursePrice: 587000, additional: 10 },
        { course: "eng", courseTitle: "English (126 Cr. in 12 Semester)", coursePrice: 395500, additional: 10 },
        { course: "economics", courseTitle: "Economics (138 Cr. in 12 Semester)", coursePrice: 431500, additional: 10 },
        { course: "sociology", courseTitle: "Sociology (144 Cr. in 12 Semester)", coursePrice: 452000, additional: 10 },
        { course: "cse", courseTitle: "CSE (161 Cr. in 12 Semester)", coursePrice: 647900, additional: 10 },
        { course: "math", courseTitle: "Mathematics (132 Cr. in 12 Semester)", coursePrice: 264640, additional: 15 },
        { course: "archi", courseTitle: "Architecture (185 Cr. in 10 Semester) 5 years", coursePrice: 792200, additional: 10 },
        { course: "llb", courseTitle: "LLB (146 Cr. in 8 Semester)", coursePrice: 335168, additional: 10 },
        { course: "pharma", courseTitle: "B.Pharma (166 Cr. in 8 Semester)", coursePrice: 625525, additional: 10 },
        { course: "eee", courseTitle: "EEE (147 Cr. in 8 Semester)", coursePrice: 585950, additional: 10 },
    ];

    const [selectedCourse, setSelectedCourse] = useState(details[0]);

    const handleCourseChange = (e) => {
        const course = details.find((item) => item.course === e.target.value);
        setSelectedCourse(course);
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 p-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
                <div className="flex-1 px-4">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th colSpan="3" className="border border-gray-300 p-2 text-center text-lg font-bold">
                                    Waiver System
                                </th>
                            </tr>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2">GPA (Regular)</th>
                                <th className="border border-gray-300 p-2">Waiver</th>
                                <th className="border border-gray-300 p-2">GPA (Diploma)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-2">5.00 - 6.99</td>
                                <td className="border border-gray-300 p-2">20%</td>
                                <td className="border border-gray-300 p-2">5.00 - 6.49</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">7.00 - 7.99</td>
                                <td className="border border-gray-300 p-2">40%</td>
                                <td className="border border-gray-300 p-2">7.00 - 7.99</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">8.00 - 8.99</td>
                                <td className="border border-gray-300 p-2">50%</td>
                                <td className="border border-gray-300 p-2">8.00 - 8.49</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">9.00 - 9.99</td>
                                <td className="border border-gray-300 p-2">80%</td>
                                <td className="border border-gray-300 p-2">8.50 - 8.99</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-2">GPA 10</td>
                                <td className="border border-gray-300 p-2">100%</td>
                                <td className="border border-gray-300 p-2">GPA 8</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-slate-800">
                    <ul className="space-y-2">
                        <li>Admission Fee: 12,500/-</li>
                        <li>Admission Form Fee: 1,000/-</li>
                        <li>ID Card Fee: 500/-</li>
                        <li>Total: 14,000/- (At the time of Admission)</li>
                    </ul>
                    <p className="py-4">Admission Time: Sunday to Thursday (9:30am to 1:30pm)</p>
                    <ul className="space-y-2">
                        <li>1. Admission & other Fees are excluded from Course fee</li>
                        <li>2. Library Membership Fee: 2,000/- (Refundable)</li>
                        <li>3. Certificate Fee: 5,000/- (After completing all Credits)</li>
                        <li>4. Department Change Fee: 5,700/-</li>
                    </ul>
                </div>
            </div>
            <div className="mb-10 overflow-x-auto mx-4">
                <select
                    onChange={handleCourseChange}
                    className="border border-gray-300 p-2 rounded mb-4"
                >
                    {details.map((item) => (
                        <option key={item.course} value={item.course}>
                            {item.courseTitle}
                        </option>
                    ))}
                </select>
                <table className="w-full border-collapse border border-gray-300 ">
                    <thead>
                        <tr className="bg-gray-200">
                            <th colSpan="5" className="border border-gray-300 p-2 text-center text-lg font-bold">
                                {selectedCourse.courseTitle}
                            </th>
                        </tr>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Waiver %</th>
                            <th className="border border-gray-300 p-2">Course fees</th>
                            <th className="border border-gray-300 p-2">Additional 10%</th>
                            <th className="border border-gray-300 p-2">Per semester</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[20, 30, 40, 50, 80, 100].map((waiver) => (
                            <tr key={waiver}>
                                <td className="border border-gray-300 p-2">{waiver}%</td>
                                <td className="border border-gray-300 p-2">
                                    {selectedCourse.coursePrice * (1 - waiver / 100)}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    {selectedCourse.coursePrice * (1 - waiver / 100) * 0.9}
                                </td>
                                <td className="border border-gray-300 p-2"> 
                                    {(selectedCourse.coursePrice * (1 - waiver / 100) * 0.9)/12}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
