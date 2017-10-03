import React from 'react';
import { Route } from 'react-router-dom';
import Phones from '../phones';

const Layout = ({children}) => (
  <div>
    <Route component={Phones} />
    {children}
  </div>
);

export default Layout;