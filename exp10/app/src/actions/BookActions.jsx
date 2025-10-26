import AppDispatcher from '../dispatcher/dispatcher';

const BookActions = {

  addBook: (title) => {
    AppDispatcher.dispatch({
      actionType: 'ADD_BOOK',
      payload: { title },
    });
  },

  removeBook: (id) => {
    AppDispatcher.dispatch({
      actionType: 'REMOVE_BOOK',
      payload: { id },
    });
  },

  toggleRead: (id) => {
    AppDispatcher.dispatch({
      actionType: 'TOGGLE_READ',
      payload: { id },
    });
  },
};

export default BookActions;