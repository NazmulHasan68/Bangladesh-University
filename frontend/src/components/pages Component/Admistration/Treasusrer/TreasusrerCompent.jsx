import React from 'react';

export default function TreasurerComponent() {
  return (
    <div className="bg-gray-100 min-h-screen py-0 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Message from The Treasurer</h1>
        <p className="text-gray-600 text-center mt-2 mb-8">Bangladesh University</p>
        
        {/* Message Content */}
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            It gives me great pleasure to welcome you at the website of Bangladesh University (BU).
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Bangladesh University was established with a view to ensuring quality higher education at a reasonable cost, 
            especially for the financially deficient group of people. Besides, it also focuses on developing a 
            knowledge-based society to meet the challenges of the 21st century by contributing to quality education, 
            research, and creative activities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The Treasurer Office ensures allocation, expenditure, and financial management towards enabling Bangladesh 
            University to reach the goal of being a true Centre of Excellence. In the process, this office also endeavors 
            to ensure transparency and accountability of the financial management at BU as directed in the Private 
            University Act, 2010.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are confident that this University will go forward with its plan and meet successfully the future challenges in education.
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Sajedul Islam<br />
            Treasurer
          </p>
        </div>

        {/* Office of the Treasurer */}
        <div className="mt-8 bg-white p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Office of the Treasurer</h2>
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b-2 bg-blue-400 border-gray-300">
                <th className="px-6 py-3 text-left text-white">Image</th>
                <th className="px-6 py-3 text-left text-white">Details</th>
              </tr>
            </thead>
            <tbody>
              {/* Treasurer Row */}
              <tr className="border-b border-gray-200">
                <td className="px-6 py-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/45.jpg" 
                    alt="Treasurer" 
                    className="w-24 h-24 rounded-lg shadow-md object-cover"
                  />
                </td>
                <td className="px-6 py-4">
                  <p className="text-gray-800 font-medium text-lg">Sajedul Islam</p>
                  <p className="text-gray-600 text-md">Treasurer</p>
                  <p className="text-gray-600 text-md">
                    Email: <a href="mailto:treasurer@bu.edu.bd" className="text-blue-500 hover:underline">
                      treasurer@bu.edu.bd
                    </a>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
