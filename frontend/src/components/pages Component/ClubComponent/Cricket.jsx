import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Cricket() {
  const memberlist = [
    { name: "Najmul Hossain Shanto", dept: "CSE", batch: "68", id: "202411068001" },
    { name: "Zakir Hasan", dept: "CSE", batch: "68", id: "202411068002" },
    { name: "Mominul Haque", dept: "CSE", batch: "68", id: "202411068003" },
    { name: "Towhid Hridoy", dept: "CSE", batch: "68", id: "202411068004" },
    { name: "Mahmudul Hasan Joy", dept: "CSE", batch: "68", id: "202411068005" },
    { name: "Nayeem Hasan", dept: "CSE", batch: "68", id: "202411068006" },
    // { name: "Rishad Hossain", dept: "CSE", batch: "68", id: "202411068007" },
    // { name: "Taijul Islam", dept: "CSE", batch: "68", id: "202411068008" },
    // { name: "Shoriful Islam", dept: "CSE", batch: "68", id: "202411068009" },
    // { name: "Taskin Ahmed", dept: "CSE", batch: "68", id: "202411068010" },
  ];

  return (
    <div className='mt-5'> 
        <div className='flex justify-between items-center gap-4'>
            <p>100 students</p>
            <input type='text' className='w-[40%] h-10 rounded-full pl-4 focus:ring-0  outline-none' placeholder='Search here'/>
            <button className='px-4 py-2 bg-red-500 rounded-3xl text-white'>Add member</button>
        </div>
      <Table>
        <TableCaption>A list of cricket team members.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Dept</TableHead>
            <TableHead>Batch</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Update & Delete</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {memberlist.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.dept}</TableCell>
              <TableCell>{item.batch}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell className='flex gap-2'>
                <button className='px-2 md:px-4 py-1 rounded-2xl text-white bg-red-400 hover:bg-red-500'>Delete</button>
                <button className='px-2 md:px-4 py-1 rounded-2xl text-white bg-green-600 hover:bg-green-800'>Update</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
