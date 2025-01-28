
import React from 'react';

const scheduleData = [
  { activity: 'Class Starts', spring: '04 Jan-15 Feb (42 Days)', summer: '01 May-27 Jun (58 Days)', fall: '02 Sep-27 Oct (56 Days)', biSpring: '04 Jan-29 Feb (57 Days)', biFall: '02 Jul-05 Sep (67 Days)' },
  { activity: 'Course Registration & 1st Installment of Course Fee', spring: '04 Jan-15 Feb (19 Days)', summer: '01 May-15 May (15 Days)', fall: '02 Sep-15 Sep (15 Days)', biSpring: '04 Jan-18 Jan (15 Days)', biFall: '02 Jul-15 Jul (15 Days)' },
  { activity: 'Orientation Week (Central/Departmental)', spring: '18 Jan-25 Jan (8 Days)', summer: '15 May-19 May (5 Days)', fall: '18 Sep-23 Sep (6 Days)', biSpring: '18 Jan-25 Jan (8 Days)', biFall: '18 Jul-23 Jul (6 Days)' },
  { activity: 'Last Date of Semester Drop', spring: '04 Feb', summer: '04 Jun', fall: '04 Oct', biSpring: '04 Feb', biFall: '01 Aug' },
  { activity: 'Last Date of 2nd Installment of Course Fee', spring: '04 Feb', summer: '26 Jun', fall: '01 Oct', biSpring: '04 Feb', biFall: '01 Aug' },
  { activity: 'Mid-Term Examination', spring: '16 Feb-16 Mar', summer: '28 Jun-05 Jul', fall: '18 Oct-26 Oct', biSpring: '01 Mar-12 Mar', biFall: '06 Sep-18 Sep' },
  { activity: 'Mid-Term Answer Script Evaluation & Mark Upload', spring: '16 Feb-16 Mar', summer: '28 Jun-27 Jul', fall: '18 Oct-17 Nov', biSpring: '01 Mar-30 Mar', biFall: '06 Sep-15 Oct' },
  { activity: 'Last Date of Mid-term Grade Sheet Submission to CoE Office', spring: '27 Feb-18 Mar', summer: '07 Jul-15 Aug', fall: '22 Oct-26 Nov', biSpring: '10 Mar-22 Apr', biFall: '15 Sep-26 Nov' },
  { activity: 'Class Re-Starts', spring: '27 Feb', summer: '07 Jul', fall: '22 Oct', biSpring: '10 Mar', biFall: '15 Sep' },
  { activity: 'Last Date of 3rd Installment of Course Fee', spring: '15 Mar', summer: '25 Jul', fall: '10 Nov', biSpring: '22 Apr', biFall: '10 Nov' },
  { activity: 'Course Distribution Meeting Week (Upcoming Semester)', spring: '19-23 Mar', summer: '29-31 Jul', fall: '12-15 Nov', biSpring: '29-31 Mar', biFall: '12-15 Nov' },
  { activity: 'Last date of Class Routine Submission (Upcoming Semester)', spring: '25 Mar', summer: '05 Aug', fall: '20 Nov', biSpring: '05 Apr', biFall: '20 Nov' },
  { activity: 'Final Examination', spring: '19-27 Apr', summer: '15-22 Aug', fall: '28 Nov-05 Dec', biSpring: '28 May-08 Jun', biFall: '10 Dec-20 Dec' },
  { activity: 'Final Answer Scripts Evaluation & Mark Upload', spring: '19-27 Apr', summer: '15-22 Aug', fall: '28 Nov-05 Dec', biSpring: '28 May-08 Jun', biFall: '10 Dec-20 Dec' },
  { activity: 'Last Date of Final Grade Sheet Submission to CoE Office', spring: '04 May', summer: '01 Sep', fall: '02 Jan', biSpring: '18 Jun', biFall: '22 Dec' },
];

const Activites = () => {
  return (
    <div className="max-w-6xl md:mx-auto p-4 bg-slate-100 rounded-2xl overflow-x-auto mx-4">
        <h1 className='text-sky-700 text-2xl font-bold text-center py-4'>BU Academic Calender</h1>
      <table className="min-w-full border border-gray-300 text-xs md:text-sm">
        <thead>
          <tr className="bg-sky-400 text-white">
            <th className="border px-4 py-2">Activity</th>
            <th className="border px-4 py-2">Spring-2024</th>
            <th className="border px-4 py-2">Summer-2024</th>
            <th className="border px-4 py-2">Fall-2024</th>
            <th className="border px-4 py-2">Bi-Spring-2024</th>
            <th className="border px-4 py-2">Bi-Fall-2024</th>
          </tr>
        </thead>
        <tbody className='text-slate-600'>
          {scheduleData.map((row, index) => (
            <tr key={index} className="border">
              <td className="border px-4 py-2">{row.activity}</td>
              <td className="border px-4 py-2">{row.spring}</td>
              <td className="border px-4 py-2">{row.summer}</td>
              <td className="border px-4 py-2">{row.fall}</td>
              <td className="border px-4 py-2">{row.biSpring}</td>
              <td className="border px-4 py-2">{row.biFall}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activites;
