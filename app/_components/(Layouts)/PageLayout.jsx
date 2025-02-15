import React from 'react';
import Navbar from '../Navbar';

const PageLayout = ({ children, className, ...props }) => {
  return (
    <>
      <Navbar className={'fixed mt-0 w-full lg:mt-6'} />
      <div className={className} {...props}>
        {children}
      </div>
    </>
  );
};

export default PageLayout;
