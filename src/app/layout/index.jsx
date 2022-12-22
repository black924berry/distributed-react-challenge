import React from 'react';

import Header from 'app/components/Header';
import Menu from 'app/components/Menu';
// ----------------------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <hr />
      {children}
    </>
  );
};

export default Layout;
