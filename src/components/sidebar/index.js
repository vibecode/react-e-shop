import React from 'react';
import BasketCart from '../../containers/basketCart';
import Search from '../../containers/search';

const Sidebar = () => {
  return (
      <div>
        <BasketCart />
        <Search />
      </div>
  )
};

export default Sidebar;
