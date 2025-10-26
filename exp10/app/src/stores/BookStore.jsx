import AppDispatcher from '../dispatcher/dispatcher';

class EventEmitter {
  constructor() {
    this.listeners = [];
  }
  
  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(l => l !== callback);
  }

  emit() {
    this.listeners.forEach(l => l());
  }
}

class BookStore extends EventEmitter {
  constructor() {
    super();
    this._books = JSON.parse(localStorage.getItem('books')) || [
      { id: Date.now(), title: 'The Lord of the Rings', read: false },
    ];
    AppDispatcher.register(this.handleActions.bind(this));
  }

  getAllBooks() {
    return this._books;
  }

  handleActions(action) {
    switch (action.actionType) {
      case 'ADD_BOOK':
        this.addBook(action.payload.title);
        break;
      case 'REMOVE_BOOK':
        this.removeBook(action.payload.id);
        break;
      case 'TOGGLE_READ':
        this.toggleRead(action.payload.id);
        break;
      default:
        // No-op
    }
  }

  addBook(title) {
    const newBook = {
      id: Date.now(), // Simple unique ID
      title,
      read: false,
    };
    this._books.push(newBook);
    this.saveAndEmit();
  }

  removeBook(id) {
    this._books = this._books.filter(book => book.id !== id);
    this.saveAndEmit();
  }

  toggleRead(id) {
    const book = this._books.find(book => book.id === id);
    if (book) {
      book.read = !book.read;
      this.saveAndEmit();
    }
  }
  
  saveAndEmit() {
    localStorage.setItem('books', JSON.stringify(this._books));
    this.emit(); 
  }
}

const bookStore = new BookStore();
export default bookStore;