import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import BookView from '../BookView';
import detailsReducer from '../../../store/features/detailsSlice';

describe('BookView component', () => {
  it('renders book details correctly when image link is available', () => {
    const book = {
      id: 'example-id',
      kind: 'example-kind',
      volumeInfo: {
        kind: 'example-kind',
        title: 'Example Title',
        authors: ['Author 1', 'Author 2'],
        categories: ['Example Category'],
        description: 'Example Description',
        imageLinks: {
          smallThumbnail: 'example-thumbnail-url',
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

    const store = configureStore({
      reducer: {
        details: detailsReducer,
      },
      preloadedState: {
        details: {
          bookId: 'example-bookId',
          book,
          isOpen: false,
        },
      },
    });

    render(
      <Provider store={store}>
        <BookView />
      </Provider>
    );

    expect(screen.getByAltText('Example Title')).toBeInTheDocument();
    expect(screen.getByText('Title: Example Title')).toBeInTheDocument();
    expect(screen.getByText('Category: Example Category')).toBeInTheDocument();
    expect(screen.getByText('Language: English')).toBeInTheDocument();
    expect(screen.getByText('Pages: 100')).toBeInTheDocument();
    expect(
      screen.getByText('Date of published: 2022-01-01')
    ).toBeInTheDocument();
    expect(screen.getByText('Strona')).toHaveAttribute(
      'href',
      'example-info-link'
    );
  });
});
