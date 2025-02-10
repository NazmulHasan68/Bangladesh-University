import React from 'react';

export default function StudentPayment({ studentById }) {
  const payment = studentById?.payment?.[0];  // Access the payment data

  console.log(studentById);

  if (!payment) {
    return <p>No payment information available.</p>;
  }

  return (
    <div className="w-full p-4 rounded-2xl bg-slate-50 shadow-md mt-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Payment Information</h2>

      <div className='grid grid-col-1 md:grid-cols-2 gap-4 text-gray-700'>
        {/* Left Table - Field Names */}
        <div>
          <table className="w-full border-collapse border border-sky-300">
            <thead>
              <tr className="bg-sky-300 text-gray-800">
                <th className="border p-2">Field</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Total Payment</td>
                <td className="border p-2">{payment.totalpayment}</td>
              </tr>
              <tr>
                <td className="border p-2">Total Due</td>
                <td className="border p-2">{payment.totaldue}</td>
              </tr>
              <tr>
                <td className="border p-2">Total Semester</td>
                <td className="border p-2">{payment.semester}</td>
              </tr>
              <tr>
                <td className="border p-2">Completed Semester</td>
                <td className="border p-2">{payment.completesemester}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Table - Payment Details */}
        <div>
          <table className="w-full border-collapse border border-sky-300">
            <thead>
              <tr className="bg-sky-300 text-gray-800">
                <th className="border p-2">Field</th>
                <th className="border p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Academic Year</td>
                <td className="border p-2">{payment.academicyear}</td>
              </tr>
              <tr>
                <td className="border p-2">Admission Fee</td>
                <td className="border p-2">{payment.admissionfee}</td>
              </tr>
              <tr>
                <td className="border p-2">Admission Form Fee</td>
                <td className="border p-2">{payment.admissionformfess}</td>
              </tr>
              <tr>
                <td className="border p-2">ID Card Fee</td>
                <td className="border p-2">{payment.idcardfee}</td>
              </tr>
              <tr>
                <td className="border p-2">Per Month</td>
                <td className="border p-2">{payment.permonth}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Payment Breakdown */}
        <div>
          <div>
            <label className="font-medium">Select Semester</label>
            <select className="border p-2 mt-2 mx-4">
              <option>{studentById?.semesters?.[0]?.semesterName || "Spring 2025"}</option>
            </select>
          </div>

          <div className="mt-4">
            <table className="w-full mt-4 border-collapse border border-sky-300">
              <thead>
                <tr className="bg-sky-300 text-gray-800">
                  <th className="border p-2">Banking</th>
                  <th className="border p-2">Per Month</th>
                  <th className="border p-2">Per Month Due</th>
                  <th className="border p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">{payment.banking}</td>
                  <td className="border p-2">{payment.permonth}</td>
                  <td className="border p-2">{payment.permonthdue}</td>
                  <td className="border p-2">N/A</td> {/* Replace with actual date if needed */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
