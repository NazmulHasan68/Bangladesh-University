import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function ApplyCategory() {
    const category = [
        {
            post: "Undergraduate",
            description: "Our undergraduate programs are designed to provide a strong foundation in your chosen field, combining theoretical knowledge with practical experience. Join us to begin your journey toward a successful career and personal growth.",
            img: "https://swiperjs.com/demos/images/nature-1.jpg",
        },
        {
            post: "Undergraduate Diploma",
            description: "Our undergraduate diploma programs offer focused, practical training in specific fields, ideal for those seeking to enter the workforce quickly or gain specialized skills.",
            img: "https://swiperjs.com/demos/images/nature-2.jpg",
        },
        {
            post: "Postgraduate",
            description: "Enhance your expertise and advance your career with our postgraduate programs. These courses are tailored for deep specialization and research opportunities, preparing you for leadership roles in your industry.",
            img: "https://swiperjs.com/demos/images/nature-3.jpg",
        },
        {
            post: "Postgraduate Diploma",
            description: "Postgraduate diploma programs provide advanced, practical knowledge for professionals looking to enhance their qualifications and stay competitive in the fast-changing job market.",
            img: "https://swiperjs.com/demos/images/nature-6.jpg",
        }
    ];

    return (
        <div className='max-w-5xl md:mx-auto mx-4 my-4 '>
            <h1 className='text-2xl font-bold text-center mb-6 text-sky-900'>Select Your Program</h1>
            <div className='grid grid-cols-2 gap-4 mb-6'>
                {category.map((item, index) => (
                    <div key={index} className='flex gap-4 bg-white shadow-lg rounded-xl p-2'>
                        <div className='md:w-[300px] w-[200px]'>
                            <img src={item.img} alt={item.post} className='w-full object-cover rounded' />
                        </div>
                        <div>
                            <h1 className='font-semibold text-sm md:text-xl text-sky-950 line-clamp-1'>{item.post}</h1>
                            <p className='md:text-md text-xs font-medium py-1 line-clamp-2 md:line-clamp-3 py-1'>{item.description}</p>
                            <Link to={'/applyInput'} className='md:px-6 md:py-2 px-4 py-1 text-xs rounded-full hover:bg-red-500 bg-red-400 text-white ml-[42%] sm:ml-[60%] mt-4 md:mt-10 md:ml-[75%]'>Apply</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
