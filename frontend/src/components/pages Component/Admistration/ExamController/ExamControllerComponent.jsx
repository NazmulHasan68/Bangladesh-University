import React from 'react';

export default function ExamControllerComponent() {
    const staff = [
        {
          name: "Didar Elahi",
          designation: "Controller of Examinations (In-charge) & Deputy Controller of Examinations",
          email: "controller@bu.edu.bd, deputycontroller@bu.edu.bd",
          phone: "01755511988",
          image: "https://randomuser.me/api/portraits/men/10.jpg", // Random placeholder
        },
        {
          name: "Md. Rajib Hossain",
          designation: "Assistant Controller of Examinations",
          email: "asst.controller1@bu.edu.bd",
          phone: "01755511975",
          image: "https://randomuser.me/api/portraits/men/20.jpg",
        },
        {
          name: "Moniruzaman Biswas",
          designation: "Office Assistant",
          phone: "01716481419",
          image: "https://randomuser.me/api/portraits/men/30.jpg",
        },
        {
          name: "Liza Moni",
          designation: "Office Assistant",
          phone: "01740243896",
          image: "https://randomuser.me/api/portraits/women/40.jpg",
        },
        {
          name: "Shusanto Kumar Das",
          designation: "Office Assistant",
          phone: "01739854019",
          image: "https://randomuser.me/api/portraits/men/50.jpg",
        },
      ];
      
      
  return (
    <div className="bg-gray-100 min-h-screen py-0 px-2 md:px-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="md:text-3xl text-xl font-bold text-center text-blue-700 mb-6">
          Message from The Controller of Examinations
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-4">Bangladesh University</p>

        {/* Message Content */}
        <div className="mt-2 text-xs md:text-sm">
          <p className="text-gray-700 leading-relaxed mb-4">
            Bangladesh University was set up in the prime location of Dhaka city aiming to provide higher education at an affordable cost. Its mission was to educate lower middle-class students, especially from the rural areas.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ever since its creation, it has been striving to cope with the technological, environmental, and economic changes of the country. In this regard, it has been updating and modernizing the curriculum and changing the examination system using IT facilities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With the changed examination system, quick publication of results and issuing of certificates have become possible. We hope that in the coming days, we will successfully fulfill our mission and vision.
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Didar Elahi <br />
            Controller of Examinations (In-charge)
          </p>
        </div>

        {/* Office of the Controller of Examinations */}
        <div className="mt-8 bg-white p-1 md:p-6 rounded-lg ">
          <h2 className="md:text-xl text-sm font-semibold text-blue-800 mb-4">Office of the Controller of Examinations</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="border-b-2 bg-blue-400 border-gray-300">
                  <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Photo</th>
                  <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Name</th>
                  <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Designation</th>
                  <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Email</th>
                  <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Phone</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((member, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-6 py-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-6 py-4">{member.name}</td>
                    <td className="px-6 py-4 text-xs md:text-sm">{member.designation}</td>
                    <td className="px-6 py-4">
                      {member.email ? (
                        <a href={`mailto:${member.email}`} className="text-blue-500 hover:underline">
                          {member.email}
                        </a>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-6 py-4">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
