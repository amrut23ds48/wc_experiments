import React, { useState, useRef } from 'react';
import BookActions from '../actions/BookActions';

function BookInput() {
  const [title, setTitle] = useState('');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      BookActions.addBook(title);
      setTitle(''); 
      inputRef.current.focus(); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        ref={inputRef}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter book title"
      />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookInput;