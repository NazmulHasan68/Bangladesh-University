import React from 'react';

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-xl font-semibold ">{title}</h2>
    {children}
  </section>
);

const GradingTable = () => {
  const grades = [
    ['80-100', 'A+', '4.00'], ['75-79', 'A', '3.75'], ['70-74', 'A-', '3.50'],
    ['65-69', 'B+', '3.25'], ['60-64', 'B', '3.00'], ['55-59', 'B-', '2.75'],
    ['50-54', 'C+', '2.50'], ['45-49', 'C', '2.25'], ['40-44', 'D', '2.00'],
    ['<40', 'F', '0.00']
  ];

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-red-50">
          <th className="border px-4 py-2">Numerical Grade</th>
          <th className="border px-4 py-2">Letter Grade</th>
          <th className="border px-4 py-2">Grade Point</th>
        </tr>
      </thead>
      <tbody>
        {grades.map(([range, grade, point], index) => (
          <tr key={grade} className={index % 2 === 0 ? 'bg-red-100' : ''}>
            <td className="border px-4 py-2">{range}</td>
            <td className="border px-4 py-2">{grade}</td>
            <td className="border px-4 py-2">{point}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function PolicyComponent() {
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white text-gray-600 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center text-sky-900">Academic Policies</h1>
      
      <div className='flex md:flex-row flex-col gap-4 my-4'>
        <div className='flex-1'>
            <Section title="Lesson Plan">
                <p>At the beginning of the semester, each faculty member submits a lesson plan outlining student evaluation methods, including essays, tests, seminar presentations, and exams.</p>
            </Section>
            
            <Section title="Class Attendance">
                <p>Students must attend at least 70% of classes to sit for the Semester Final Examination. The authority may condone shortages on valid grounds.</p>
            </Section>
            
            <Section title="Examination Policies">
                <ul className="list-disc pl-6">
                <li><strong>Coding System:</strong> Exams follow a coding system for transparency.</li>
                <li><strong>Mark Distribution:</strong> Class participation (10%), Midterm (30%), Final (50%).</li>
                <li><strong>Makeup Exams:</strong> Allowed for valid reasons with supporting documents.</li>
                <li><strong>Improvement Exams:</strong> Allowed for grades C+ and below, except for practical/lab courses.</li>
                </ul>
            </Section>
        </div>
        <div className='flex-1'>
            <Section title="Grading System">
                <GradingTable />
            </Section>
        </div>
      </div>
      
      
      <Section title="Academic Standing & Leave">
        <p>Students must maintain a CGPA of at least 2.25 to remain in good standing. Leave of absence up to three semesters is allowed under specific conditions.</p>
      </Section>
      
      <Section title="Unfair Means & Disciplinary Actions">
        <p>Students are clearly warned against adopting unfair means during examinations or assignments, which include:</p>
        <ul className="list-disc pl-6">
          <li>Communicating with one another.</li>
          <li>Possession of any incriminating document whether used or not.</li>
          <li>Copying from another student’s script/report/paper.</li>
          <li>Copying from desk or palm of the hand or from other incriminating documents.</li>
          <li>Any approach in direct or indirect form to influence teacher concerning grade.</li>
          <li>Using abusive language or holding out threats to the invigilator.</li>
          <li>Creating disturbance or obstruction inside the Examination Hall.</li>
          <li>Unruly behavior which disrupts academic discipline/program.</li>
        </ul>
        <p><strong>Disciplinary action:</strong></p>
        <p>The result of a student may be withheld at the report of an invigilator or course teacher for adopting unfair means. Adoption of unfair means may also lead to expulsion of the student from the program and the university. Necessary punitive measures in this regard will be taken in the meeting of a committee constituted by the authority.</p>
        <p><strong>Appeal against punishment:</strong></p>
        <p>If a student is aggrieved by an order of punishment awarded by the authority as per decision of the Disciplinary Committee, he/she may file an appeal before the Vice Chancellor within one month of passing such an order. The Disciplinary Committee and Vice Chancellor shall, as an appellate authority, review the case and pass such order as thought proper and just.</p>
      </Section>
      
      <Section title="Degree & Certificate Requirements">
        <p>Students need a minimum CGPA of 2.25 for graduation. Certificates and transcripts are issued upon fulfilling academic and financial obligations.</p>
      </Section>
    </div>
  );
}
