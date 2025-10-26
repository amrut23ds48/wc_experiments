import React from 'react';
import BookItem from './BookItem';

function BookList({ books }) {
  if (books.length === 0) {
    return <p>No books in the library yet. Add one!</p>;
  }

  return (
    <ul className="book-list">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </ul>
  );
}

export default BookList;