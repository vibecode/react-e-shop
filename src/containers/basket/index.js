import React from 'react';
import { connect } from 'react-redux';
import {
  getTotalBasketPrice,
  getBasketPhonesWithCount
} from '../../selectors';
import R from 'ramda';
import { Container, Grid } from 'semantic-ui-react';

const Basket = ({ phones, totalPrice }) => {
  const isBasketEmpty = R.isEmpty(phones);
  const renderContent = () => {
    return (
        <div>
          {isBasketEmpty && <div>Your shopping cart is empty</div>}

          <div className='table-responsive'>
            <table className='table-bordered table-striped table-condensed cf'>
              <tbody>
              {phones.map((phone) => (
                  <tr key={phone.id}>
                    <td>
                      <img
                          className='img-thumbnail'
                          src={phone.image}
                          alt={phone.name}
                      />
                    </td>
                    <td>{phone.name}</td>
                    <td>${phone.price}</td>
                    <td>{phone.count}</td>
                    <td>
                      <span>delete</span>
                    </td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
          {
            //R.not
            //A function that returns the ! of its argument. It will return true when passed false-y value, and false when passed a truth-y one.
            R.not(isBasketEmpty) &&
            <div>
              <div>
                <b>Total:</b>
                ${totalPrice}
              </div>
            </div>
          }
        </div>
    )
  };

  const renderSidebar = () => (
      <div>
        Sidebar
      </div>
  );

  return (
      <Container>
        <Grid>
          <Grid.Column width={12}>
            {renderContent()}
          </Grid.Column>
          <Grid.Column width={4}>
            {renderSidebar()}
          </Grid.Column>
        </Grid>
      </Container>
  )
};

const mapStateToProps = state => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
  }
};

export default connect(mapStateToProps, null)(Basket);

