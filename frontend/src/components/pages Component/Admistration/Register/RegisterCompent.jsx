import React from 'react';

export default function RegistrarComponent() {
  const users = [
    {
      name: "Brig. Gen. Md. Mahbubul Haque (Retd)",
      designation: "Registrar",
      email: "registrar.bu@bu.edu.bd",
      phone: "02 8117951",
      fax: "+88 02 9141019",
    },
    {
      name: "Md. Siddiqur Rahman",
      designation: "Deputy Registrar",
      email: "deputyregistrar.le@bu.edu.bd",
      phone: "01755559324, 01771186003",
    },
    {
      name: "Naureen Ayesha",
      designation: "Deputy Registrar",
      email: "deputyregistrar@bu.edu.bd",
      phone: "01755511980",
    },
    {
      name: "Md. Moshiur Rahman",
      designation: "Senior Assistant Registrar",
      email: "sr.asst.registrar1@bu.edu.bd",
      phone: "01755511976",
    },
    {
      name: "Mohammad Shafiquzzaman",
      designation: "Coordinator, Office of the Chairman",
      phone: "01755559322",
    },
    {
      name: "Md. Tariqul Islam",
      designation: "Procurement Officer",
      email: "procurement@bu.edu.bd",
      phone: "01755-511981",
    },
    {
      name: "S. M. Munim Rahman",
      designation: "Assistant Engineer (Civil)",
      email: "asst.engr.civil@bu.edu.bd",
      phone: "01755669485",
    },
    {
      name: "Provakar Roy",
      designation: "Executive (IT)",
      email: "it@bu.edu.bd",
      phone: "01755511983",
    },
    {
      name: "Md. Rofikul Islam",
      designation: "Executive (PA to Registrar)",
      phone: "01715636654",
    },
    {
      name: "Md. Nasir Uddin",
      designation: "Executive (IT)",
      email: "mdnasirarinda@gmail.com",
      phone: "01858018463",
    },
    {
      name: "Md. Junaead",
      designation: "Executive (IT)",
      email: "contact.junaead@gmail.com",
      phone: "01755511984, 01623013748",
    },
    {
      name: "Nadira Akter",
      designation: "Assistant Course Coordinator",
      phone: "01755556548",
    },
    {
      name: "Md. Hatem Ali",
      designation: "Assistant: Reg. Office",
      email: "registrar.office@bu.edu.bd",
      phone: "01755511978",
    },
    {
      name: "Md. Jafor Ali",
      designation: "Office Assistant",
      phone: "01736232168",
    },
    {
      name: "Md. Masum Bhuiyan",
      designation: "Store Keeper",
      phone: "01756829174",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-0 px-2 md:px-20">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header */}
        <h1 className="md:text-3xl text-xl font-bold text-center text-blue-700 mb-6">
          Message from The Registrar
        </h1>
        <p className="text-gray-600 text-center mt-2 mb-4">Bangladesh University</p>

        {/* Message Content */}
        <div className="mt-2 text-xs md:text-sm">
          <p className="text-gray-700 leading-relaxed mb-4">
            I take this opportunity to welcome you all on behalf of the Bangladesh University (BU) family. BU is one of the leading private universities in Bangladesh, and as Registrar, I am fortunate to carry forward the mission and vision of this institution.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The prime task of our management is to execute all programs of BU with adequate planning, academic assessment, and feedback. We ensure smooth operation and timely implementation of plans and decisions framed by BU authorities.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our academic programs are of the highest standards and are constantly reviewed to match the changing trends and demands of the corporate and industrial world. The university has state-of-the-art facilities like urban labs, tech labs, digital classrooms, libraries, and various clubs to help students grow academically and personally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            As our students, faculty members, and staff come from diverse backgrounds, we provide equal opportunities for everyone. We always keep our doors open to listen to them as they are the direct source of information and feedback.
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Brig. Gen. Md. Mahbubul Haque (Retd)<br />
            Registrar
          </p>
        </div>

        {/* Office of the Registrar */}
        <div className="mt-8 bg-white p-1 md:p-4 rounded-lg overflow-x-auto">
          <h2 className="text-xl font-semibold text-blue-800 mb-2">Office of the Registrar</h2>
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="border-b-2 bg-blue-400 border-gray-300">
                <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Name</th>
                <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Designation</th>
                <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Email</th>
                <th className="px-6 py-2 text-left text-xs md:text-sm text-blue-100">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="px-6 py-4 text-xs md:text-sm">{user.name}</td>
                  <td className="px-6 py-4 text-xs md:text-sm">{user.designation}</td>
                  <td className="px-6 py-4 text-xs md:text-sm">
                    {user.email ? (
                      <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                        {user.email}
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4 text-xs md:text-sm">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
