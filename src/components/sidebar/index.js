import React from 'react';
import Categories from '../../containers/categories';
import { Menu } from 'semantic-ui-react';

const Sidebar = () => {
  return (
      <Menu vertical fluid>
        <Categories />
      </Menu>
  )
};

export default Sidebar;
