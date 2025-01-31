import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './librarian.css'; // Ensure custom styles are loaded

export default function LibraryLibrarian() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    arrows: false,
    centerPadding: '20px', // Adjust for space
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '30px' } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '20px' } }
    ]
  };

  const librarians = [
    { id: 1, name: "Librarian Name", role: "Position or Role", img: "https://www.w3schools.com/w3images/avatar1.png" },
    { id: 2, name: "Librarian Name", role: "Position or Role", img: "https://www.w3schools.com/w3images/avatar2.png" },
    { id: 3, name: "Librarian Name", role: "Position or Role", img: "https://www.w3schools.com/w3images/avatar3.png" },
    { id: 4, name: "Librarian Name", role: "Position or Role", img: "https://www.w3schools.com/w3images/avatar4.png" },
    { id: 5, name: "Librarian Name", role: "Position or Role", img: "https://www.w3schools.com/w3images/avatar5.png" }
  ];

  return (
    <div className='max-w-5xl md:mx-auto mx-4'>
      <div>
        <h1 className='text-center text-xl md:text-2xl font-semibold text-sky-800'>Librarian and Staff</h1>
        <div className='flex md:flex-row flex-col gap-4 justify-between items-center'>
          <div className='text-sky-900 text-xs md:text-sm py-4 w-full md:w-1/2'>
            <p>Librarians provide access to information, promote lifelong learning, assist with research, engage communities, preserve culture, support creativity, ensure job security, manage digital resources, offer equal access, and contribute to societal growth.</p>
          </div>
          <div className='w-full md:w-1/2'>
            <Slider {...settings}>
              {librarians.map((librarian) => (
                <div key={librarian.id} className=""> 
                  <div className="w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col items-center ">
                    <img
                      src={librarian.img}
                      alt={librarian.name}
                      className="w-full h-[200px] object-cover rounded-md mb-2"
                    />
                    <h3 className="font-semibold text-lg">{librarian.name}</h3>
                    <p className="text-sm text-gray-600">{librarian.role}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
