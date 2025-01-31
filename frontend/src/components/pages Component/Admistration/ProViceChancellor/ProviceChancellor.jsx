import React from 'react';

export default function ProviceChancellor() {
  return (
    <div className="bg-gray-100 min-h-screen py-0 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Message from the Pro-Vice-Chancellor</h1>
        <p className="text-gray-600 text-center mt-2 mb-8">Bangladesh University</p>
        
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            It is a great pleasure for me to be a part of Bangladesh University (BU) as its first government appointed Pro-Vice-Chancellor. I take this opportunity to welcome students coming from all parts of the country and joining the university in undergraduate and postgraduate programmes, ranging from Arts to Sciences, Economics, and Business Management. The university is dedicated to imparting quality and value-based cutting-edge education to prepare our students competitive in the national as well as in the global workforce market.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed mb-4">
            I am happy to share that the university has been running all academic programmes in its beautiful permanent campus, located in Dhaka city, with the help of highly competent and dedicated faculties of multi-disciplinary streams. Each of the departments has been providing outcome-based education, using advanced teaching-learning tools. I am optimistic that our demand-based and regularly updated curricula, along with different co-curricular, and extra-curricular activities, will shape our students’ physical, mental and intellectual growth during their stay with BU.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed mb-4">
            BU offers very affordable tuition fees and is always keen to attract the best and support poor students through a wide range of tuition fee waivers. On behalf of BU, I assure our students that we are highly committed to helping them to build their life-long career in the varied social, cultural, and economic environment.
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Professor Dr. Md. Jahangir Alam<br />
            Pro-Vice-Chancellor
          </p>
        </div>

        {/* Office of the Pro-Vice-Chancellor */}
        <div className="mt-8 bg-white p-6 rounded-lg px-4 overflow-x-auto">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Office of the Pro-Vice-Chancellor</h2>
          <table className="min-w-full bg-white rounded-lg ">
            <thead>
              <tr className="border-b-2 bg-sky-400  border-gray-300">
                <th className="px-6 py-3 text-left text-gray-50">Image</th>
                <th className="px-6 py-3 text-left text-gray-50">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Pro-Vice-Chancellor Row */}
              <tr className="border-b border-gray-200">
                <td className="px-1 md:px-6 py-4">
                  <img src="https://picsum.photos/200/300?random=4" alt="Pro-Vice-Chancellor" className="w-40 h-36 rounded-lg shadow-md" />
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800 font-medium text-lg">Professor Dr. Md. Jahangir Alam</p>
                  <p className="text-gray-600 text-md">Pro-Vice-Chancellor</p>
                  <p className="text-gray-600 text-md">Email: <a href="mailto:vc@bu.edu.bd" className="text-blue-500 hover:underline">vc@bu.edu.bd</a></p>
                  <p className="text-gray-600 text-md">Phone: 01755559300</p>
                </td>
              </tr>

              {/* Office Assistant Row */}
              <tr className="border-b border-gray-200">
                <td className="px-1 md:px-6 md:px py-4">
                  <img src="https://picsum.photos/200/300?random=5" alt="Office Assistant" className="w-40 h-36 rounded-lg shadow-md" />
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800 font-medium text-lg">Khandakar Shahadat Hossain</p>
                  <p className="text-gray-600 text-md">Office Assistant</p>
                  <p className="text-gray-600 text-md">Email: <a href="mailto:kh.shahadathossain@outlook.com" className="text-blue-500 hover:underline">kh.shahadathossain@outlook.com</a></p>
                  <p className="text-gray-600 text-md">Phone: 01755559329</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
