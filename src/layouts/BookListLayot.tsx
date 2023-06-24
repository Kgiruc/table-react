import { ReactNode } from 'react';

interface BookListLayoutProps {
  children: ReactNode;
  isAuthor: boolean;
}

function BookListLayout({ children, isAuthor }: BookListLayoutProps) {
  return (
    <section>
      <h1>{isAuthor ? 'Books with this author' : 'Books'}</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Authors</th>
            <th>Kind</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </section>
  );
}

export default BookListLayout;
