import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('renders not found page correctly', () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );

  const heading = screen.getByText(/page not found/i);
  expect(heading).toBeInTheDocument();

  const image = screen.getByAltText(/404/i);
  expect(image).toBeInTheDocument();

  const message = screen.getByText(
    /sorry, we couldn’t find the page you’re looking for/i
  );
  expect(message).toBeInTheDocument();

  const homeLink = screen.getByRole('link', { name: /home/i });
  expect(homeLink).toBeInTheDocument();

  fireEvent.click(homeLink);
  expect(window.location.pathname).toBe('/');
});
