import React, { useState } from 'react';

export default function SemiterInformation({ studentById }) {
  const [selectedSemester, setSelectedSemester] = useState(
    studentById?.semesters?.[0]?.semesterName || ""
  );

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  // Find the selected semester from the list
  const selectedSemesterData = studentById?.semesters?.find(
    (semester) => semester.semesterName === selectedSemester
  );

  return (
    <form className="w-full p-4 rounded-2xl bg-slate-50 shadow-md mt-4 overflow-x-auto">
      <div className="flex gap-2 items-center text-gray-700 text-sm md:text-xl">
        <h1>Semester Result:</h1>
        <select value={selectedSemester} onChange={handleSemesterChange} className='bg-sky-100 px-4 p-1 rounded-3xl'>
          {studentById?.semesters?.map((semester, index) => (
            <option key={index} value={semester.semesterName} >
              {semester.semesterName}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full mt-4 border-collapse border border-sky-300 ">
        <thead>
          <tr className="bg-sky-300 text-sky-800">
            <th className="border p-2">Subject Code</th>
            <th className="border p-2">Subject Name</th>
            <th className="border p-2">Faculty</th>
            <th className="border p-2">Subject Credit</th>
            <th className="border p-2">Subject Grade</th>
          </tr>
        </thead>
        <tbody>
          {selectedSemesterData?.subjects?.map((subject, index) => (
            <tr key={index} className="text-center text-gray-700">
              <td className="border p-2">{subject.subjectcode}</td>
              <td className="border p-2">{subject.subjectname}</td>
              <td className="border p-2">{subject.faculty}</td>
              <td className="border p-2">{subject.subjectcredit}</td>
              <td className="border p-2">{subject.subjectgrade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
