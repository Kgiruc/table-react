import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from '../../store/store';
import HomeLayout from '../../layouts/HomeLayot';

describe('Home', () => {
  test('search button is disabled when searchTerm is less than 3 characters', () => {
    render(
      <Provider store={store}>
        <Router>
          <HomeLayout>
            <Home />
          </HomeLayout>
        </Router>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('min. 3 char.');
    fireEvent.change(searchInput, { target: { value: 'ab' } });

    const searchButton = screen.queryByRole('button', { name: 'Szukaj' });
    expect(searchButton).toBeNull();
  });

  test('search button is enabled when searchTerm is at least 3 characters', () => {
    render(
      <Provider store={store}>
        <Router>
          <HomeLayout>
            <Home />
          </HomeLayout>
        </Router>
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('min. 3 char.');
    fireEvent.change(searchInput, { target: { value: 'abc' } });

    const searchButton = screen.getByRole('button', { name: 'Szukaj' });
    expect(searchButton).toBeEnabled();
  });
});
