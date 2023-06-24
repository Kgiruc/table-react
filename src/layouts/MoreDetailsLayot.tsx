import { ReactNode } from 'react';

interface MoreDetailsLayoutProps {
  children: ReactNode;
}

function MoreDetailsLayout({ children }: MoreDetailsLayoutProps) {
  return <main>{children}</main>;
}

export default MoreDetailsLayout;
