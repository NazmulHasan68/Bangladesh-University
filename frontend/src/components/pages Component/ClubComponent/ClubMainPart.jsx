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
          onChange={handleClubChange} // Handle selection change
          defaultValue=""
        >
          <option value="" disabled>Select a club</option>
          <option value="/club/cricket">Cricket</option>
          <option value="/club/football">Football</option>
          <option value="/club/cultural-club">Cultural Club</option>
          <option value="/club/programming-club">Programming Club</option>
          <option value="/club/language-club">Language Club</option>
          <option value="/club/debating-club">Debating Club</option>
          <option value="/club/badminton">Badminton</option>
          <option value="/club/carrom-board">Carrom Board</option>
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
