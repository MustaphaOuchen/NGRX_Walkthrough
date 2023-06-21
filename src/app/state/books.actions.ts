import { createActionGroup, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

//Actions file is used to describe the books actions

// adding and removing books
export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

//book list retrieval
export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
  },
});
