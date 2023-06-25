import { render, screen } from '@testing-library/react';
import BookListLayout from '../BookListLayot';

describe('BookListLayout', () => {
  test('renders children and header correctly', () => {
    // Define test data
    const testData = [
      { id: 1, title: 'Book 1', authors: 'Author 1', kind: 'Kind 1' },
      { id: 2, title: 'Book 2', authors: 'Author 2', kind: 'Kind 2' },
    ];

    // Render the component with test data
    render(
      <BookListLayout isAuthor={false}>
        {testData.map((book) => (
          <tr key={book.id}>
            <td>{book.title}</td>
            <td>{book.authors}</td>
            <td>{book.kind}</td>
            <td>Details</td>
          </tr>
        ))}
      </BookListLayout>
    );

    // Check if the header is rendered correctly
    const header = screen.getByText('Books:');
    expect(header).toBeInTheDocument();

    // Check if the children (book rows) are rendered correctly
    testData.forEach((book) => {
      const title = screen.getByText(book.title);
      const authors = screen.getByText(book.authors);
      const kind = screen.getByText(book.kind);
      const details = screen.getAllByText('Details');

      expect(title).toBeInTheDocument();
      expect(authors).toBeInTheDocument();
      expect(kind).toBeInTheDocument();
      expect(details.length).toBe(3);
    });
  });
});
