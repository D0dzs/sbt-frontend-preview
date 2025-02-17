import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PageLayout = ({ children, className, ...props }) => {
  return (
    <>
      <Navbar className={'fixed z-20 mt-0 w-full lg:mt-6'} />
      <div className={className} {...props}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
