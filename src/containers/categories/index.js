import React from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../../selectors';
import { NavLink, withRouter } from 'react-router-dom';

const Categories = ({ categories }) => {
  const activeStyle = { color: 'red', fontWeight: 'bold' };

  const renderCategory = (category) => {
    return (
        <li key={category.id}>
          <NavLink
              to={`/categories/${category.id}`}
              activeStyle={activeStyle}>
            {category.name}
          </NavLink>
        </li>
    )
  };

  return (
      <div>
        <h4>Brand</h4>
        <ul>
          <NavLink
              to="/"
              exact
              activeStyle={activeStyle}>
            All Brands
          </NavLink>
          {categories.map((category, index) => renderCategory(category, index))}
        </ul>
      </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  categories: getCategories(state),
});

export default withRouter(connect(mapStateToProps, null)(Categories));
