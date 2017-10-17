import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getTotalBasketPrice,
  getBasketPhonesWithCount
} from '../../selectors';
import R from 'ramda';
import { Container, Grid, Button, Table, Image, Icon } from 'semantic-ui-react';
import {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket
} from '../../actions';

const Basket = ({ phones, totalPrice, removePhoneFromBasket, cleanBasket, basketCheckout }) => {
  const isBasketEmpty = R.isEmpty(phones);

  const renderContent = () => {
    return (
        <div className="basketContainer">
          {isBasketEmpty ? <h2>Your shopping cart is empty</h2> : <Table celled>
            <Table.Body>
              {phones.map((phone) => (
                  <Table.Row key={phone.id}>
                    <Table.Cell>
                      <Image
                          size="tiny"
                          src={phone.image}
                          alt={phone.name}
                      />
                    </Table.Cell>
                    <Table.Cell>{phone.name}</Table.Cell>
                    <Table.Cell textAlign="center">${phone.price}</Table.Cell>
                    <Table.Cell textAlign="center">{phone.count}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <Icon
                          name="delete"
                          link
                          size="large"
                          onClick={() => removePhoneFromBasket(phone.id)}
                      >
                      </Icon>
                    </Table.Cell>
                  </Table.Row>
              ))}
            </Table.Body>
            {
              //R.not
              //A function that returns the ! of its argument. It will return true when passed false-y value, and false when passed a truth-y one.
              R.not(isBasketEmpty) &&
              <Table.Row celled>
                <Table.Cell textAlign="right" colSpan={5}>
                  <span className="priceTotal"><b>Total: </b>${totalPrice}</span>
                  <Button onClick={() => basketCheckout(phones)}>
                    Checkout
                  </Button>
                </Table.Cell>
              </Table.Row>
            }
          </Table>
          }
        </div>
    )
  };

  return (
      <Container>
        <Grid>
          <Grid.Column width={12}>
            {renderContent()}
          </Grid.Column>
          <Grid.Column width={4}>
            <Link
                to='/'
                className="ui fluid button green continue"
            >
              Continue shopping!
            </Link>
            {
              R.not(isBasketEmpty) &&
              <Button fluid onClick={cleanBasket}>
                Clear cart
              </Button>
            }
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
