import React from 'react';
import image from '../../../assets/commonPhoto/home3.jpg';

export default function AlumniGalary() {
  return (
    <div className="max-w-5xl mx-2 md:mx-auto my-4">
      <div className="h-[180px] max-w-4xl mx-auto rounded-3xl bg-slate-200 overflow-hidden">
        <img src={image} alt="Alumni" className="w-full h-full object-cover" />
      </div>

      <div className='my-5'>
        <h1 className="text-xl font-bold text-sky-700 mt-4">Alumni Benefits & Services</h1>
        <p className="text-md font-semibold text-sky-700 mt-4">
          As a Bangladesh University alumnus, you enjoy a range of benefits including:
        </p>

        <ol className="list-decimal pl-5 text-sky-900">
          <li>Career Support: Job placement assistance and networking opportunities.</li>
          <li>Alumni Network: Connect with fellow graduates for collaboration and knowledge sharing.</li>
          <li>Continuing Education: Discounts on courses and workshops.</li>
          <li>Library Access: Exclusive access to academic resources.</li>
          <li>Event Invitations: Invitations to alumni events and reunions.</li>
          <li>Exclusive Discounts: Special discounts on products and services.</li>
        </ol>
      </div>
    </div>
  );
}
