import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from 'react-router-dom';
import { useGetTeachersDataQuery } from '../../../../redux/BuTeacherApi';

export default function GetTeachersData() {
  const [searchId, setSearchId] = useState(""); 

  // Fetch teacher data based on searchId
  const { data, isLoading, error } = useGetTeachersDataQuery();
    console.log(data);
    
  return (
    <div className="overflow-y-auto h-[90%]">
      {/* ✅ Display Loading and Error Messages */}
      {isLoading ? (
        <p className="text-center text-gray-600 py-4">Loading teachers...</p>
      ) : error ? (
        <p className="text-center text-red-500 py-4">Error fetching teachers</p>
      ) : (
        <Table>
          <TableHeader >
            <TableRow className='bg-sky-600 hover:bg-sky-600'>
              <TableHead className="w-[100px] text-white">Teacher ID</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white">Department</TableHead>
              <TableHead className="text-white text-right">Phone</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* If there's a search query, show the teacher */}
            {searchId && data?.length === 1 ? (
              <TableRow key={data[0]._id} style={{ cursor: 'pointer' }}>
                <TableCell>
                  <Link to={`/dashboard/coordinator/teacher/${data[0].teacherid}`} className="hover:text-gray-800 text-gray-600">
                    {data[0].teacherid}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={`/dashboard/coordinator/teacher/${data[0].teacherid}`} className="hover:text-gray-800 text-gray-600">
                    {data[0].teachername}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link to={`/dashboard/coordinator/teacher/${data[0].teacherid}`} className="hover:text-gray-800 text-gray-600">
                    {data[0].faculty.depart}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Link to={`/dashboard/coordinator/teacher/${data[0].teacherid}`} className="hover:text-gray-800 text-gray-600">
                    {data[0].phone}
                  </Link>
                </TableCell>
              </TableRow>
            ) : (
              // Otherwise, show all teachers
              data?.length > 0 &&
              data.map((teacher) => (
                <TableRow key={teacher._id} style={{ cursor: 'pointer' }}>
                  <TableCell>
                    <Link to={`/dashboard//coordinatorteacher/${teacher.teacherid}`} className="hover:text-gray-800 text-gray-600">
                      {teacher.teacherid}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/dashboard/coordinator/teacher/${teacher.teacherid}`} className="hover:text-gray-800 text-gray-600">
                      {teacher.teachername}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Link to={`/dashboard/coordinator/teacher/${teacher.teacherid}`} className="hover:text-gray-800 text-gray-600">
                      {teacher.faculty.depart}
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link to={`/dashboard/coordinator/teacher/${teacher.teacherid}`} className="hover:text-gray-800 text-gray-600">
                      {teacher.phone}
                    </Link>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
