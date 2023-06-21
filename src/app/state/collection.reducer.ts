import { createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

//sace only id
export const initialState: ReadonlyArray<string> = [];

//handle actions that alter the user's book collection. 

export const collectionReducer = createReducer(
  initialState,
  on(BooksActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(BooksActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state; //avoid duplicates

    return [...state, bookId];
  })
);
