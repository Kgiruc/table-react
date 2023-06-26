import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import BooksList from '../BooksList';
import { store } from '../../../store/store';
import { Book } from '../../../models/book';

const books: Book[] = [
  {
    id: 'book1',
    kind: 'example-kind',
    volumeInfo: {
      title: 'Example Title 1',
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
  },
  {
    id: 'book2',
    kind: 'example-kind2',
    volumeInfo: {
      title: 'Example Title 2',
      authors: ['Author 2'],
      categories: ['Example Category 2'],
      description: 'Example Description 2',
      imageLinks: {
        smallThumbnail: 'example-small-thumbnail-url2',
        thumbnail: 'example-thumbnail-url2',
      },
      industryIdentifiers: {
        identifier: 'example-identifier2',
        type: 'example-type2',
      },
      infoLink: 'example-info-link2',
      language: 'English',
      pageCount: '100',
      publishedDate: '2022-01-01',
    },
  },
];

test('rendersList', () => {
  render(
    <Provider store={store}>
      <table>
        <tbody>
          <BooksList books={books} author={false} />
        </tbody>
      </table>
    </Provider>
  );

  expect(screen.getByText('Example Title 1')).toBeInTheDocument();
  expect(screen.getByText('Example Title 2')).toBeInTheDocument();
  expect(screen.getByText('Author 1')).toBeInTheDocument();
  expect(screen.getByText('Author 2')).toBeInTheDocument();
  expect(screen.getByText('example-kind')).toBeInTheDocument();
  expect(screen.getByText('example-kind2')).toBeInTheDocument();
});
