import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import user images
import user1 from '../../assets/user/user2.jpg';
import user3 from '../../assets/user/user3.jpg';
import user4 from '../../assets/user/user4.jpg';
import user5 from '../../assets/user/user5.jpg';
import user6 from '../../assets/user/user6.jpg';
import user7 from '../../assets/user/user7.jpg';

export default function Alumni() {
    const users = [
        { name: "Nazmul Hasan", job: "Web Developer", company: "ABC Ltd.", img: user1 },
        { name: "Aisha Khan", job: "Graphic Designer", company: "XYZ Inc.", img: user3 },
        { name: "Michael Brown", job: "Project Manager", company: "Tech Solutions", img: user4 },
        { name: "Sophia Lee", job: "Software Engineer", company: "Innovatech", img: user5 },
        { name: "David Smith", job: "Data Analyst", company: "DataCorp", img: user6 },
        { name: "Emily Davis", job: "Marketing Specialist", company: "MarketHub", img: user7 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="max-w-6xl mx-auto my-10 px-4 flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="w-full md:w-2/4 mb-6 md:mb-0">
                <h1 className="text-xl md:text-2xl font-semibold text-sky-700 mb-4">Alumni Network Benefits</h1>
                <ul className="text-sky-950 space-y-2 text-sm md:text-base">
                    <li><strong>01. Networking:</strong> Career connections.</li>
                    <li><strong>02. Career Support:</strong> Job resources.</li>
                    <li><strong>03. Mentorship:</strong> Alumni guidance.</li>
                    <li><strong>04. Events:</strong> Reunions and networking.</li>
                    <li><strong>05. Resources:</strong> Access to facilities.</li>
                    <li><strong>06. Community:</strong> Supportive network.</li>
                </ul>
            </div>

            {/* Slider Section */}
            <div className="w-full md:w-2/4">
                <Slider {...settings}>
                    {users.map((item, index) => (
                        <div key={index} className="p-4">
                            <div className="relative rounded-lg overflow-hidden shadow-lg">
                                <img src={item.img} alt={`${item.name}'s profile`} className="w-full h-64 object-cover" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <h1 className="text-white text-lg font-semibold">{item.name}</h1>
                                    <h2 className="text-white text-sm">{item.job}</h2>
                                    <p className="text-white text-xs">{item.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
