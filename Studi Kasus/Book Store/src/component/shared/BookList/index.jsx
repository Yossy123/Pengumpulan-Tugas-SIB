import React, { useState } from 'react';
import initialBooks from '../../../Utils/books.js';

export default function BookList() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const newBook = {
      id: books.length + 1,
      title: "Buku Baru",
      author: "Penulis Baru",
      year: new Date().getFullYear(),
      description: "Buku baru yang ditambahkan.",
      image: "https://via.placeholder.com/150/24a0ed/FFFFFF?Text=Buku+Baru",
      price: 175000, 
    };
    
    setBooks([...books, newBook]);


    alert('Buku baru berhasil ditambahkan! Silahkan cek di browser.');
  };

  return (
    <div className="book-list-container" style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Daftar Buku</h2>
      
      <div 
        className="book-list" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
          gap: '25px',
          margin: '40px 0' 
        }}
      >

        {books.map((book) => (
          <div 
            key={book.id} 
            className="book-item" 
            style={{ 
              border: '1px solid #e0e0e0', 
              borderRadius: '8px', 
              padding: '15px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
            }}
          >
            <img 
              src={book.image} 
              alt={book.title} 
              style={{ width: '150px', height: '150px', objectFit: 'cover', backgroundColor: '#f0f0f0' }}
            />
            <h4 style={{ marginTop: '15px', marginBottom: '5px', minHeight: '40px' }}>{book.title}</h4>
            <p style={{ margin: '0', fontSize: '0.9em', color: '#666' }}>Tahun: {book.year}</p>
            <p style={{ margin: '5px 0 0 0', fontWeight: 'bold' }}>
              Harga: Rp. {book.price.toLocaleString('id-ID')}
            </p>
          </div>
        ))}
      </div>

      <button 
        onClick={handleAddBook} 
        style={{ 
          padding: '12px 25px', 
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Tambah Buku Baru
      </button>
    </div>
  );
}