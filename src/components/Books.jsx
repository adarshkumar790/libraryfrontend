import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import '../CSS/Book.css';

const Books = ({ role }) => {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get(`${baseURL}/book/books`)
      .then(res => {
        setBooks(res.data);  
      })
      .catch(err => console.log(err));  
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleBookNow = (bookId) => {
    console.log(`Book ID: ${bookId} is being booked`);
    axios.post(`${baseURL}/book/book-now/${bookId}`)
      .then(response => {
        console.log('Book successfully booked:', response.data);
        alert('Book successfully booked!');
      })
      .catch(error => {
        console.error('Error booking the book:', error);
        alert('Failed to book the book.');
      });
  };

  
  const filteredBooks = books.filter(book => 
    book.cif?.includes(filter) ||  
    book.name.toLowerCase().includes(filter.toLowerCase()) || 
    book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className='book-list-container'>
      
      <div className="filter-container">
        <input 
          type="text" 
          className="filter-input" 
          placeholder="Search by book name, author, or CIF..." 
          value={filter}
          onChange={handleFilterChange}
        />
        <button className="filter-button" onClick={() => setFilter(filter)}>
          Search
        </button>
      </div>

      <div className='book-list'>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard 
              key={book._id} 
              book={book} 
              role={role}
              onBookNow={handleBookNow}  
            />
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Books;
