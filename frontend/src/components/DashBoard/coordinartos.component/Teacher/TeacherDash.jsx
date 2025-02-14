import React, { useState } from "react";
import { Search } from "lucide-react";
import TeacherApplyForm from "./TeacherApplyForm";
import GetTeachersData from "./GetTeachersData";

export default function TeacherDash() {
  const [open, setOpen] = useState(false); 

  return (
    <div >
      <div className="p-4 mx-2 bg-gray-100 rounded-lg shadow-md">
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs md:text-lg hidden md:flex font-semibold text-gray-700">
            Total Teachers: <span className="text-blue-600">102</span>
          </p>

          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-3xl p-1 px-1 bg-white">
            <input
              type="search"
              placeholder="Enter teacher name or ID"
              className="w-full outline-none bg-transparent px-2"
            />
            <div className="bg-blue-700 p-1 rounded-full">
              <Search size={20} className="text-white" />
            </div>
          </div>

          {/* Add Teacher Button */}
          <button
            onClick={() => setOpen(true)} 
            className="text-xs md:text-md bg-blue-600 rounded-3xl text-white py-2 px-4 hover:bg-blue-700"
          >
            Add Teacher
          </button>
        </div>
      </div>

      {/* Teacher Apply Form (Dialog) */}
      <TeacherApplyForm open={open} setOpen={setOpen} />

      <div className="p-2 mx-2 mt-4 bg-gray-100 rounded-lg shadow-md h-[450px] md:h-[420px] overflow-y-auto">
        <GetTeachersData/>
      </div>
    </div>
  );
}
