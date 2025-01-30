import React from "react";

export default function Offer() {
  return (
    <div className="min-h-screen bg-gray-100 py-4 px-4 md:px-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="md:text-3xl text-xl font-bold text-center text-blue-600 mb-6">
          Offered Degrees
        </h1>
        <p className="text-gray-600 text-center mb-8 text-sm md:text-lg">
          Bangladesh University currently offers 14 degrees through its three faculties.
        </p>

        {/* Faculty of Science, Engineering & Technology */}
        <div className="mb-6">
          <h2 className="md:text-xl text-md font-semibold text-blue-500 mb-2">
            Faculty of Science, Engineering & Technology
          </h2>
          <ul className="list-disc md:text-sm text-xs list-inside text-gray-700 space-y-1">
            <li>B.Sc. in Computer Science & Engineering (CSE)</li>
            <li>B.Sc. in Mathematics</li>
            <li>B.Pharm. (Hons) in Pharmacy</li>
            <li>B.Sc. in Electrical and Electronic Engineering (EEE)</li>
            <li>B.Arch in Architecture</li>
          </ul>
        </div>

        {/* Faculty of Arts, Social Science & Law */}
        <div className="mb-6">
          <h2 className="md:text-xl text-md  font-semibold text-blue-500 mb-2">
            Faculty of Arts, Social Science & Law
          </h2>
          <ul className="list-disc md:text-sm text-xs  list-inside text-gray-700 space-y-1">
            <li>B.A. (Hons) in English</li>
            <li>M.A. in English</li>
            <li>B.S.S. in Sociology</li>
            <li>Bachelor of Laws (L.L.B.)</li>
            <li>Master of Laws (L.L.M.) - 1 year program</li>
          </ul>
        </div>

        {/* Faculty of Business Administration & Economics */}
        <div>
          <h2 className="md:text-xl text-md  font-semibold text-blue-500 mb-2">
            Faculty of Business Administration & Economics
          </h2>
          <ul className="list-disc md:text-sm text-xs  list-inside text-gray-700 space-y-1">
            <li>
              Bachelor of Business Administration (B.B.A.), with majors in:
              <ul className="list-disc pl-6 space-y-1">
                <li>Accounting</li>
                <li>Finance</li>
                <li>Marketing</li>
                <li>Management</li>
                <li>Human Resource Management (HRM)</li>
              </ul>
            </li>
            <li>Master of Business Administration (M.B.A.) (Regular & Executive)</li>
            <li>Bachelor of Social Science (B.S.S.) in Economics</li>
          </ul>
        </div>
      </div>
    </div>
  );
}