import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingElements from './FloatingElements';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <FloatingElements />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;