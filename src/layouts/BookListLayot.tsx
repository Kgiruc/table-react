import { ReactNode } from 'react';

interface BookListLayoutProps {
  children: ReactNode;
  isAuthor: boolean;
}

function BookListLayout({ children, isAuthor }: BookListLayoutProps) {
  return (
    <section className="p-4">
      <h1 className=" mb-4 text-center font-belanosima text-2xl sm:text-3xl md:mb-6 md:text-5xl">
        {isAuthor ? 'Books with this Author:' : 'Books:'}
      </h1>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse">
          <thead className="font-belanosima text-lg md:text-2xl">
            <tr>
              <th className="border p-2">Title</th>
              <th className="border p-2">Authors</th>
              <th className="border p-2">Kind</th>
              <th className="border p-2">Details</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </section>
  );
}

export default BookListLayout;
