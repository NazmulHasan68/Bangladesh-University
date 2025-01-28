import React from 'react';

export default function LibraryResource() {
  return (
    <div className="max-w-7xl md:mx-auto mx-4 my-4 bg-slate-50 rounded-xl p-4 ">
      <div className="flex gap-4 justify-between items-start text-sky-800">
        {/* Library Resources Section */}
        <div className="p-4 rounded-xl bg-slate-50 flex-1 shadow-xl">
          <h1 className="text-sm font-semibold text-sky-800 mb-2">Resources</h1>
          <ol className="list-decimal list-inside space-y-1 md:text-sm text-xs">
            <li>Book Renew</li>
            <li>Referencing Guide</li>
            <li>Referencing Software</li>
            <li>Plagiarism Guide</li>
            <li className=' line-clamp-1'>Institutional Repository</li>
          </ol>
        </div>
        
        {/* Library Services Section */}
        <div className="p-4 rounded-xl bg-slate-50 flex-1 shadow-xl">
          <h1 className="text-sm font-semibold text-sky-800 mb-2">Library Services</h1>
          <ol className="list-decimal list-inside space-y-1 md:text-sm text-xs">
            <li>Circulation</li>
            <li>Requisition, Acquisition</li>
            <li>OpenAthens</li>
            <li>E-Books</li>
            <li>Online Journals</li>
          </ol>
        </div>
        
        {/* Additional Services Section */}
        <div className="p-4 rounded-xl bg-slate-50 flex-1 shadow-xl hidden md:flex flex-col">
          <h1 className="text-sm font-semibold text-sky-800 mb-2">Helps</h1>
          <ol className="list-decimal list-inside space-y-1 md:text-sm text-xs">
            <li>Ask a Librarian</li>
            <li>Library User Guide</li>
            <li>Library Policy</li>
            <li>Grammar & Plagiarism</li>
            <li>Check Administrative Directory</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
