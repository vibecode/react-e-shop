import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../selectors';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Categories = ({ categories }) => {
  const activeStyle = { fontWeight: 'bold' };

  const renderCategory = (category) => {
    return (
        <NavLink
            key={category.id}
            className="item"
            to={`/categories/${category.id}`}
            activeStyle={activeStyle}>
          {category.name}
        </NavLink>
    )
  };

  return (
      <Menu vertical fluid>
        <Menu.Item header>
          <h3>Categories</h3>
        </Menu.Item>
        <NavLink
            className="item"
            to="/"
            exact
            activeStyle={activeStyle}>
          All Brands
        </NavLink>
        {categories.map((category, index) => renderCategory(category, index))}
      </Menu>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
});

export default withRouter(connect(mapStateToProps, null)(Categories));
