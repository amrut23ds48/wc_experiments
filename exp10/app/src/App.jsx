import React, { useState, useEffect } from 'react';
import BookStore from './stores/BookStore';
import BookList from './components/BookList';
import BookInput from './components/BookInput';


function getBooksState() {
  return BookStore.getAllBooks();
}

function App() {
  const [books, setBooks] = useState(getBooksState());

  useEffect(() => {
    const handleStoreChange = () => {
      setBooks([...getBooksState()]);
    };

    BookStore.addListener(handleStoreChange);

    return () => {
      BookStore.removeListener(handleStoreChange);
    };
  }, []);

  return (
    <div className="app-container">
      <h1>📚 Library Book Counter</h1>
      <BookInput />
      <BookList books={books} /> 
    </div>
  );
}

export default App;