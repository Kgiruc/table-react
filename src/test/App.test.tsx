import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';

describe('App', () => {
  it('Renders hello world', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('hello world');
  });
  it('Renders not found if invalid path', () => {
    render(
      <MemoryRouter initialEntries={['/banana']}>
        <NotFound />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');
  });
});
