import React from 'react';

const PageLayout = ({ children, className, ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default PageLayout;
