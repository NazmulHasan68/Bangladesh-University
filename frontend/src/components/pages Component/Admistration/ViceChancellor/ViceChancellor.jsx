import React from 'react';

export default function ViceChancellor() {
  return (
    <div className="bg-gray-100 min-h-screen py-2 px-2 md:px-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-xl md:text-3xl font-bold text-center text-blue-700 mb-6">Message from the Vice-Chancellor</h1>
        <p className="text-gray-600 text-center mt-2 mb-4">Bangladesh University</p>
        
        <div className="mt-4 text-xs md:text-sm">
          <p className="text-gray-700 leading-relaxed mb-4">
            Bangladesh University was set up in 2001 (October) in the prime location of Dhaka City near Asad Gate to provide higher education at an affordable cost. The Founder, Late Quazi Azher Ali, had a unique dream of imparting education to financially backward students from rural areas in Bangladesh.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed mb-4">
            We are delighted that you have decided to undertake your tertiary studies at Bangladesh University. Our institution offers a wide range of courses and activities that will enhance your campus life. We are committed to providing a conducive environment for learning, research, and public service.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed mb-4">
            The university encourages students to actively participate in co-curricular activities, sports, and recreational facilities. While we strive to keep all our courses and facilities updated, students are advised to contact the concerned department for any queries regarding course availability.
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            We look forward to welcoming you to Bangladesh University for a bright and successful future.
          </p>
        </div>

        {/* Office of the Vice-Chancellor */}
        <div className="mt-8 bg-white p-2 rounded-lg px-2 overflow-x-auto">
          <h2 className="md:text-xl text-sm font-semibold text-blue-800 mb-4">Office of the Vice-Chancellor</h2>
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b-2 bg-blue-200 border-gray-300">
                <th className="px-6 py-3 md:text-md text-xs text-left text-blue-800">Image</th>
                <th className="px-6 py-3 md:text-md text-xs text-left text-blue-800">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Vice-Chancellor Row */}
              <tr className="border-b border-gray-200">
                <td className="px-2 md:px-6 py-4">
                  <img src="https://picsum.photos/200/300?random=1" alt="Vice-Chancellor" className="w-40 md:w-full object-cover h-40 rounded-lg shadow-md" />
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800 font-semibold line-clamp-1 text-md md:text-lg">Professor Dr. Md. Jahangir Alam</p>
                  <p className="text-gray-600 text-xs md:text-md">Vice-Chancellor (Acting)</p>
                  <p className="text-gray-600 text-xs md:text-md">Email: <a href="mailto:vc@bu.edu.bd" className="text-blue-500 hover:underline">vc@bu.edu.bd</a></p>
                  <p className="text-gray-600 text-xs md:text-md">Phone: 01755559300</p>
                </td>
              </tr>

              {/* Director Row */}
              <tr className="border-b border-gray-200">
                <td className="px-2 md:px-6 py-4">
                  <img src="https://picsum.photos/200/300?random=2" alt="Director" className="w-40 md:w-full object-cover h-40 rounded-lg shadow-md" />
                </td>
                <td className="px-2 md:px-6 py-4">
                  <p className="text-gray-800 font-semibold text-md md:text-lg">Professor Dr. Quazi Taif Sadat</p>
                  <p className="text-gray-600 text-xs md:text-md">Director</p>
                  <p className="text-gray-600 text-xs md:text-md">Email: <a href="mailto:taif@panbangla.com" className="text-blue-500 hover:underline">taif@panbangla.com</a></p>
                </td>
              </tr>

              {/* Office Assistant Row */}
              <tr className="border-b border-gray-200">
                <td className="px-2 md:px-6 py-4">
                  <img src="https://picsum.photos/200/300?random=3" alt="Office Assistant" className="w-40 md:w-full object-cover h-40 rounded-lg shadow-md" />
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800 font-semibold text-md md:text-lg">Khandakar Shahadat Hossain</p>
                  <p className="text-gray-600 text-xs md:text-md">Office Assistant</p>
                  <p className="text-gray-600 text-xs md:text-md">Email: <a href="mailto:kh.shahadathossain@outlook.com" className="text-blue-500 hover:underline">kh.shahadathossain@outlook.com</a></p>
                  <p className="text-gray-600 text-xs md:text-md">Phone: 01755559329</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
