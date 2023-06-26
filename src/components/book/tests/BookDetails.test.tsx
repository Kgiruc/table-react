import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BooksDetails from '../BooksDetails';
import { store } from '../../../store/store';
import { Book } from '../../../models/book';

const book: Book = {
  id: 'book1',
  kind: 'example-kind',
  volumeInfo: {
    title: 'Example Title',
    authors: ['Author 1'],
    categories: ['Example Category'],
    description: 'Example Description',
    imageLinks: {
      smallThumbnail: 'example-small-thumbnail-url',
      thumbnail: 'example-thumbnail-url',
    },
    industryIdentifiers: {
      identifier: 'example-identifier',
      type: 'example-type',
    },
    infoLink: 'example-info-link',
    language: 'English',
    pageCount: '100',
    publishedDate: '2022-01-01',
  },
};

test('does not render link when condition is not met', () => {
  render(
    <Provider store={store}>
      <BooksDetails id="book1" author={false} book={book} />
    </Provider>
  );

  const linkElement = screen.queryByText('More details');
  expect(linkElement).toBeNull();
});
