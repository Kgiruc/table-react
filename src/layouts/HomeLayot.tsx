import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main
      className="flex h-screen w-screen flex-col items-center justify-center bg-blue-500 px-4 py-2 font-bold 
    text-white"
    >
      <h1 className="text-4xl">Wyszukaj książkę:</h1>
      {children}
    </main>
  );
}

export default HomeLayout;
