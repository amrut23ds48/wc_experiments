import React from 'react';
import BookActions from '../actions/BookActions';

function BookItem({ book }) {
  const handleRemove = () => {
    BookActions.removeBook(book.id);
  };
  
  const handleToggle = () => {
    BookActions.toggleRead(book.id);
  };
  
  return (
    <li className={`book-item ${book.read ? 'read' : ''}`}>
      <span onClick={handleToggle}>
        {book.title}
      </span>
      <div className="actions">
        <button onClick={handleRemove}>Remove</button>
      </div>
    </li>
  );
}

export default BookItem;