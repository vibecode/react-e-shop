import React from 'react';
import BasketCart from '../../containers/basketCart';
import Search from '../../containers/search';
import Categories from '../../containers/categories';

const Sidebar = () => {
  return (
      <div>
        <BasketCart />
        <Search />
        <Categories />
      </div>
  )
};

export default Sidebar;
