import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Books from './Books';
import { store } from '../../store/store';

describe('Books', () => {
  test('displays loading state when data is loading', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      </Provider>
    );

    // Sprawdź, czy jest renderowany stan ładowania
    const loadingImage = screen.getByAltText('loading');
    expect(loadingImage).toBeInTheDocument();
  });

  test('displays error message when data retrieval fails', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      </Provider>
    );

    // Sprawdź, czy jest renderowany komunikat błędu
    const errorMessage = screen.getByText('Not found...');
    expect(errorMessage).toBeInTheDocument();
  });

  test('displays book list when data retrieval is successful', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Books />
        </MemoryRouter>
      </Provider>
    );

    // Sprawdź, czy jest renderowana lista książek
    const bookList = screen.getByRole('table');
    expect(bookList).toBeInTheDocument();
  });
});
