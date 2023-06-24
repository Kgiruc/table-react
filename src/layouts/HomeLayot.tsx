import { ReactNode } from 'react';

interface HomeLayoutProps {
  children: ReactNode;
}

function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main>
      <h1>Wyszukaj książkę:</h1>
      {children}
    </main>
  );
}

export default HomeLayout;
