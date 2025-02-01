import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';

// Example data for the blogs with 8 items and using Lorem Picsum for images
const blogData = [
  {
    id: 1,
    image: 'https://picsum.photos/300/200?random=1',
    title: 'Blog Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Jan 2025',
    author: 'Nazmul Hasan',
    department: 'CSE Dept.',
  },
  {
    id: 2,
    image: 'https://picsum.photos/300/200?random=2',
    title: 'Blog Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Feb 2025',
    author: 'John Doe',
    department: 'ECE Dept.',
  },
  {
    id: 3,
    image: 'https://picsum.photos/300/200?random=3',
    title: 'Blog Title 3',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Mar 2025',
    author: 'Alice Smith',
    department: 'Marketing Dept.',
  },
  {
    id: 4,
    image: 'https://picsum.photos/300/200?random=4',
    title: 'Blog Title 4',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Apr 2025',
    author: 'David Lee',
    department: 'Design Dept.',
  },
  {
    id: 5,
    image: 'https://picsum.photos/300/200?random=5',
    title: 'Blog Title 5',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'May 2025',
    author: 'Sophia Brown',
    department: 'Education Dept.',
  },
  {
    id: 6,
    image: 'https://picsum.photos/300/200?random=6',
    title: 'Blog Title 6',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Jun 2025',
    author: 'Lucas Gray',
    department: 'Engineering Dept.',
  },
  {
    id: 7,
    image: 'https://picsum.photos/300/200?random=7',
    title: 'Blog Title 7',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Jul 2025',
    author: 'Emily White',
    department: 'Research Dept.',
  },
  {
    id: 8,
    image: 'https://picsum.photos/300/200?random=8',
    title: 'Blog Title 8',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    date: 'Aug 2025',
    author: 'Oliver Black',
    department: 'HR Dept.',
  },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4; // Display 4 blogs per page

  // Get the current blogs to display based on the page number
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className='grid grid-cols-1 gap-4'>
      {currentBlogs.map((blog) => (
        <div key={blog.id} className='flex flex-row gap-4 shadow-lg'>
          <div className='md:basis-1/4 basis-1/5'>
            <img
              src={blog.image}
              alt={blog.title}
              className='w-full h-full object-cover rounded-md'
            />
          </div>
          <Link to={'/single/blog'} className='md:basis-3/4 basis-4/5 md:p-4 p-1 rounded-lg'>
            <h1 className='text-sm md:text-xl font-bold text-sky-800'>{blog.title}</h1>
            <p className='line-clamp-2 text-xs md:text-sm text-sky-800'>{blog.description}</p>
            <div className='flex justify-between items-end mt-4'>
              <p className='md:text-sm text-xs text-gray-500'>{blog.date}</p>
              <div className='text-xs text-gray-500'>
                <p>{blog.author}</p>
                <p>{blog.department}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Pagination */}
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={totalPages}
        onPageChange={handlePageChange}
        containerClassName={'pagination vertical'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextClassName={'page-item'}
        nextLinkClassName={'page-link'}
        disabledClassName={'disabled'}
      />
      
      {/* Styles for Vertical Pagination */}
      <style>
        {`
          .pagination.vertical {
            display: flex;
            flex-direction: row;
            align-items: center;
            list-style: none;
            padding: 10px;
          }

          .page-item {
            margin: 5px 0;
            color:red;
          }

          .page-link {
            padding: 8px 12px;
            border: 1px solid #ddd;
            cursor: pointer;
          }

          .page-link:hover {
            background-color: #f0f0f0;
          }

          .disabled {
            opacity: 0.5;
            pointer-events: none;
          }
           
        `}
      </style>
    </div>
  );
}
