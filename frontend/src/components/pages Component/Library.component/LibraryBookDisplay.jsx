import React from 'react';

// Book data array
const books = [
  { id: 1, name: "The Lord of the Rings", author: "J.R.R. Tolkien", img: "https://covers.openlibrary.org/b/id/8228781-L.jpg" },
  { id: 2, name: "The Alchemist", author: "Paulo Coelho", img: "https://covers.openlibrary.org/b/id/12502334-L.jpg" },
  { id: 3, name: "Catch-22", author: "Joseph Heller", img: "https://covers.openlibrary.org/b/id/12607565-L.jpg" },
  { id: 4, name: "Brave New World", author: "Aldous Huxley", img: "https://covers.openlibrary.org/b/id/10268622-L.jpg" },
  { id: 5, name: "Dune", author: "Frank Herbert", img: "https://covers.openlibrary.org/b/id/11153263-L.jpg" },
  { id: 6, name: "Crime and Punishment", author: "Fyodor Dostoevsky", img: "https://covers.openlibrary.org/b/id/12084185-L.jpg" },
  { id: 7, name: "War and Peace", author: "Leo Tolstoy", img: "https://covers.openlibrary.org/b/id/8375956-L.jpg" },
  { id: 8, name: "The Shining", author: "Stephen King", img: "https://covers.openlibrary.org/b/id/8281990-L.jpg" }
];


export default function LibraryBookDisplay() {
  return (
    <div className="max-w-7xl mx-2 md:mx-auto my-4 p-2 bg-slate-50 rounded-2xl shadow-md">
      <div className="text-center py-3">
        <h1 className="text-2xl font-semibold text-red-500">Book Collection</h1>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 h-96 overflow-y-auto p-1">
        {books.map((book) => (
          <div key={book.id} className="bg-white p-2 rounded-xl shadow-lg h-64 flex flex-col">
            <img src={book.img} alt={book.name} className="w-full h-[75%] object-cover rounded-lg" />
            <div className="text-sky-800 px-2 py-2">
              <h1 className="text-sm font-bold line-clamp-1">{book.name}</h1>
              <p className="text-xs text-gray-600 line-clamp-1">by {book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

