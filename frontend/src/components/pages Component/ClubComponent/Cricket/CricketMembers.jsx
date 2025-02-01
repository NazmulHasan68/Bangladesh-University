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

export default function CricketMembers() {
  const memberlist = [
    { name: "Shakib Al Hasan", dept: "EEE", batch: "65", id: "202311065001" },
    { name: "Mashrafe Mortaza", dept: "ME", batch: "64", id: "202311064002" },
    { name: "Tamim Iqbal", dept: "CE", batch: "66", id: "202311066003" },
    { name: "Liton Das", dept: "BBA", batch: "67", id: "202311067004" },
    { name: "Mushfiqur Rahim", dept: "CSE", batch: "65", id: "202311065005" },
    { name: "Mahmudullah Riyad", dept: "EEE", batch: "63", id: "202311063006" },
    { name: "Mustafizur Rahman", dept: "CE", batch: "68", id: "202311068007" },
    { name: "Soumya Sarkar", dept: "BBA", batch: "66", id: "202311066008" },
    { name: "Mehidy Hasan", dept: "CSE", batch: "67", id: "202311067009" },
    { name: "Afif Hossain", dept: "ME", batch: "69", id: "202311069010" },
  ];

  return (
    <div className='mt-5 overflow-x-auto mx-1 text-slate-800'> 
        <div className='flex justify-between items-center gap-4'>
            <p className='text-xs md:text-sm'>{memberlist.length} students</p>
            <input type='text' className='w-[40%] md:h-10 h-8 rounded-full pl-4 focus:ring-0 outline-none' placeholder='Search here'/>
            <button className='md:px-4 px-2 py-2 bg-red-500 rounded-3xl text-xs text-white'>Add member</button>
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
