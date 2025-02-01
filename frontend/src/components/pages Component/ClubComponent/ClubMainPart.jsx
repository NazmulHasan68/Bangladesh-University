import React from 'react';
import ClubSidebar from './ClubSidebar';
import { useNavigate, Outlet } from 'react-router-dom';

export default function ClubMainPart() {
  const navigate = useNavigate();

  const handleClubChange = (event) => {
    const selectedClub = event.target.value;
    if (selectedClub) {
      navigate(selectedClub); // Navigate to the selected club route
    }
  };

  return (
    <div className='max-w-7xl md:mx-auto mx-4 my-6'>
      <div className='mb-4 md:w-[450px] flex gap-4 items-center text-gray-700'>
        <label htmlFor="club-select" className="block basis-2/6 font-semibold">
          Select your club:
        </label>
        <select 
          id="club-select" 
          className="mt-1 basis-4/6 p-2 border rounded-md w-full md:w-auto"
          
        >
          <option  disabled>Select a club</option>
          <option>Cricket</option>
          <option >Football</option>
          <option >Cultural Club</option>
          <option >Programming Club</option>
          <option >Language Club</option>
          <option >Debating Club</option>
          <option >Badminton</option>
          <option >Carrom Board</option>
        </select>
      </div>

      <div className='flex flex-col md:flex-row gap-4'>
        <div className='basis-1/5'>
          <ClubSidebar />
        </div>
        
        <div className='basis-4/5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
