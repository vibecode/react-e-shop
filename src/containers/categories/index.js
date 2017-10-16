import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../selectors';
import { NavLink, withRouter } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Categories = ({ categories }) => {
  const activeStyle = { color: 'red', fontWeight: 'bold' };

  const renderCategory = (category) => {
    return (
        <Menu.Item key={category.id}>
          <NavLink
              to={`/categories/${category.id}`}
              activeStyle={activeStyle}>
            {category.name}
          </NavLink>
        </Menu.Item>
    )
  };

  return (
      <div>
        <Menu.Header>
          <h4>Brand</h4>
        </Menu.Header>
        <Menu.Item>
          <NavLink
              to="/"
              exact
              activeStyle={activeStyle}>
            All Brands
          </NavLink>
        </Menu.Item>
        {categories.map((category, index) => renderCategory(category, index))}
      </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
});

export default withRouter(connect(mapStateToProps, null)(Categories));
