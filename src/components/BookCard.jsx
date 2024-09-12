import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({ book, role, onBookNow }) => {
  const { cif, name, author, imageUrl } = book;

  return (
    <div className='book-card'>
      <img src={imageUrl} alt={name} className='book-image' />
      <div className='book-details'>
        <h3> CIF: {cif}</h3>
        <h3> Name: {name} </h3>
        <p> Author: {author} </p>
      </div>

      {/* Admin-only Actions */}
      {role === 'admin' && (
        <div className='book-actions'>
          <button className='btn-link'>
            <Link to={`/book/${book._id}`}>Edit</Link>
          </button>
          <button className='btn-link'>
            <Link to={`/delete/${book._id}`}>Delete</Link>
          </button>
        </div>
      )}

      {/* "Book Now" Button for All Users */}
      <div className='book-actions'>
        <button className='btn-book'>
          <Link 
            to={{
              pathname: "/contact",
              state: { cif, bookname: name }, // Pass CIF and book name to Contact page
            }}
          >
            Book Now
          </Link>
        </button>
      </div>
    </div>
  );
};

export default BookCard;
