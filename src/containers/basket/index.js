import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {
  getTotalBasketPrice,
  getBasketPhonesWithCount
} from '../../selectors';
import R from 'ramda';
import { Container, Grid, Button } from 'semantic-ui-react';
import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
} from '../../actions';

const Basket = ({ phones, totalPrice, removePhoneFromBasket, cleanBasket, basketCheckout }) => {
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
                      <Button
                          onClick={() => removePhoneFromBasket(phone.id)}
                      >X
                      </Button>
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
        <Link to='/' >
          <span>Continue shopping!</span>
        </Link>
        {
          R.not(isBasketEmpty) &&
          <div>
            <Button
                onClick={cleanBasket}
            >
              Clear cart
            </Button>

            <Button
                onClick={() => basketCheckout(phones)}
            >
              Checkout
            </Button>
          </div>
        }
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

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
