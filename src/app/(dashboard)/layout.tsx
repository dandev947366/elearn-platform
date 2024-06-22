import React, { ReactNode } from 'react';
import Sidebar from '@/components/layout/Sidebar';

type LayoutProps = {
  children: ReactNode; 
};

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    
      <main className="p-4">
        {children}
      </main>
  
  );
};

export default layout;
