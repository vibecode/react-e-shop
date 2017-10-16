import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTotalBasketCount, getTotalBasketPrice } from '../../selectors';
import { Icon } from 'semantic-ui-react';

const BasketCart = ({ totalBasketCount, totalPrice }) => (
      <div>
        <Link to="/basket">
          <Icon name='shop' size="large"/>
          <span>{totalBasketCount} item(s) - ${totalPrice}</span>
        </Link>
      </div>
);

const mapStateToProps = state => {
  return {
    totalBasketCount: getTotalBasketCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
};

export default connect(mapStateToProps, null)(BasketCart);

