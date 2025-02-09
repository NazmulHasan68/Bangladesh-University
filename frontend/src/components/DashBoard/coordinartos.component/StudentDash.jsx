import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link, useNavigate } from 'react-router-dom';
import { useGetStudentsDataByIdQuery, useGetStudentsDataQuery } from '../../../redux/BustudentApi';

export default function StudentDash() {
  const [searchId, setSearchId] = useState('');
  const [department, setDepartment] = useState('');
  const navigate = useNavigate()

  //  Fetch students using RTK Query (fetch all students)
  const { data: students = [], isLoading, error } = useGetStudentsDataQuery();
  const { data: studentById, isLoading: byIdIsLoading, error: byIdError } = useGetStudentsDataByIdQuery(searchId, {
    skip: !searchId,
  });

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  return (
    <div className='w-full h-screen bg-gray-100 '>
      {/* Search option section */}
      <div className='flex justify-between items-center p-2 bg-white/60 '>
        {/* Total Students Count */}
        <p className='hidden md:flex text-gray-700 font-semibold'>Total Students: {students.length}</p>
        
        {/* Search Input */}
        <div className='w-[60%] md:h-10 h-8 shadow-md rounded-full relative'>
          <input 
            type='search' 
            name='id'
            placeholder='Search by ID...'
            className='w-full h-full rounded-full md:pl-10 pl-8 focus:outline-none text-black'
            value={searchId}
            onChange={handleSearchChange}
          />
          <button 
            onClick={() => {
                  if (searchId) {
                    navigate(`/dashboard/coordinator/student/${searchId}`);
                  }
            }} 
          className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-1 rounded-full'>
            <IoIosSearch className='text-xl md:text-2xl' />
          </button>
        </div>

        {/* Department Selection */}
        <select 
          name='department' 
          className='p-2 px-4 rounded-2xl focus:outline-none bg-gray-100 text-gray-700 cursor-pointer'
          value={department} 
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value=''>Department</option>
          <option value='CSE'>CSE</option>
          <option value='BBA'>BBA</option>
          <option value='MATH'>MATH</option>
          <option value='English'>English</option>
          <option value='Pharmacy'>Pharmacy</option>
          <option value='LLB'>LLB</option>
          <option value='Architecture'>Architecture</option>
          <option value='Economics'>Economics</option>
          <option value='EEE'>EEE</option>
          <option value='Sociology'>Sociology</option>
        </select>
      </div>

      {/* ✅ Display Loading and Error Messages */}
      <div className='overflow-y-auto h-[90%]'>
        {isLoading || byIdIsLoading ? (
          <p className="text-center text-gray-600 py-4">Loading students...</p>
        ) : error || byIdError ? (
          <p className="text-center text-red-500 py-4">Error fetching students</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Student ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* If there's a search query, show that student */}
              {searchId && studentById ? (
                <TableRow key={studentById.studentid} style={{ cursor: 'pointer' }}>
                  <TableCell>
                    <Link to={`/dashboard/coordinator/student/${studentById.studentid}`} className="hover:text-gray-800 text-gray-600">
                      {studentById.studentid}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/dashboard/coordinator/student/${studentById.studentid}`} className="hover:text-gray-800 text-gray-600">
                      {studentById.studentname}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/dashboard/coordinator/student/${studentById.studentid}`} className="hover:text-gray-800 text-gray-600">
                      {studentById.Batch}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/student/${studentById.studentid}`} className="hover:text-gray-800 text-gray-600">
                      {studentById.desiredDepartment}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/dashboard/coordinator/student/${studentById.studentid}`} className="hover:text-gray-800 text-gray-600">
                      {studentById.phone}
                    </Link>
                  </TableCell>
                </TableRow>
              ) : (
                // Otherwise, show all students
                students.length > 0 && students.map((student) => (
                  <TableRow key={student.studentid} style={{ cursor: 'pointer' }}>
                    <TableCell>
                      <Link to={`/dashboard/coordinator/student/${student.studentid}`} className="hover:text-gray-800 text-gray-600">
                        {student.studentid}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/dashboard/coordinator/student/${student.studentid}`} className="hover:text-gray-800 text-gray-600">
                        {student.studentname}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/dashboard/coordinator/student/${student.studentid}`} className="hover:text-gray-800 text-gray-600">
                        {student.Batch}
                      </Link>
                    </TableCell>
                    <TableCell>
                      <Link to={`/dashboard/coordinator/student/${student.studentid}`} className="hover:text-gray-800 text-gray-600">
                        {student.desiredDepartment}
                      </Link>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link to={`/dashboard/coordinator/student/${student.studentid}`} className="hover:text-gray-800 text-gray-600">
                        {student.phone}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}
