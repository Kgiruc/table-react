import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className="h-screen w-screen flex-col md:flex md:flex-row">
      <section
        className="flex h-1/2 w-full flex-grow flex-col items-center justify-center bg-gray-300 p-0 px-4 py-2 font-bold text-black
       md:h-screen"
      >
        <h1 className="mb-7 font-belanosima text-5xl">Search a Book:</h1>
        {children}
      </section>
      <aside className="flex h-1/2 w-full flex-grow items-center justify-center md:h-full">
        <img
          src="src\assets\books.jpg"
          alt="Zdjęcie"
          className="h-full w-full"
        />
      </aside>
    </main>
  );
}

export default HomeLayout;
