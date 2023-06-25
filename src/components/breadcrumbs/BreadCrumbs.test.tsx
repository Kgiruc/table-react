import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Breadcrumbs from './BreadCrumbs';

test('renders breadcrumbs correctly', () => {
  render(
    <Router>
      <Breadcrumbs />
    </Router>
  );

  const homeLink = screen.getByText('Home');
  const separator = screen.getByText('/');

  expect(homeLink).toBeInTheDocument();
  expect(separator).toBeInTheDocument();
});
