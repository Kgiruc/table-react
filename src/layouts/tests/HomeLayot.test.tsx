import { render, screen } from '@testing-library/react';
import HomeLayout from '../HomeLayot';

describe('HomeLayout', () => {
  test('renders children and header correctly', () => {
    // Render the component with a child element
    render(
      <HomeLayout>
        <p>Child component</p>
      </HomeLayout>
    );

    // Check if the child component is rendered correctly
    const childComponent = screen.getByText('Child component');
    expect(childComponent).toBeInTheDocument();

    // Check if the header is rendered correctly
    const header = screen.getByText('Search a Book:');
    expect(header).toBeInTheDocument();

    // Check if the background image is rendered correctly
    const backgroundImage = screen.getByAltText('Zdjęcie');
    expect(backgroundImage).toBeInTheDocument();
    expect(backgroundImage.getAttribute('src')).toBe('src\\assets\\books.jpg');
  });
});
