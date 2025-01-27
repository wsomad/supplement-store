import React, { ReactNode } from 'react';
import Header from '@/components/header/header';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>
          <div className="lg:max-w-8xl mx-auto sm:space-x-8 py-5 border-gray-300 px-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default Layout;