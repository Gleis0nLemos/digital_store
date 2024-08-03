import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (  
    <>
      <Header />
      <main className='bg-secondary_2'>
        {children}
      </main>
      <Footer />
    </>
    
  );
}
//  
export default Layout;