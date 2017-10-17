import React, { Component } from 'react';
import BasketCart from '../../containers/basketCart';
import { connect } from 'react-redux';
import { fetchPhoneById, addPhoneToBasket } from '../../actions';
import { getPhoneById } from '../../selectors';
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import R from 'ramda';

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id);
  }

  renderContent() {
    const { phone } = this.props;

    return (
        <div>
          <Grid>
            <Grid.Column width={6}>
              <Image
                  className='img-thumbnail'
                  src={phone.image}
                  alt={phone.name}
              />
            </Grid.Column>
            <Grid.Column width={6}>
              <table>
                {this.renderFields()}
              </table>
            </Grid.Column>
          </Grid>
          <div className='caption-full'>
            <h4 className='pull-right'>${phone.price}</h4>
            <h4>{phone.name}</h4>
            <p>{phone.description}</p>
          </div>
        </div>
    )
  }

  renderFields() {
    const { phone } = this.props;

    //R.compose
    //Performs right-to-left function composition.
    //The rightmost function may have any arity;
    //the remaining functions must be unary.
    //Note: The result of compose is not automatically curried.
    const columnFields = R.compose(
        R.toPairs,
        //R.pick
        //Returns a partial copy of an object containing only the keys specified.
        // If the key does not exist, the property is ignored.
        R.pick([
          'cpu',
          'camera',
          'size',
          'weight',
          'display',
          'battery',
          'memory'
        ])
    )(phone);

    return columnFields.map(([key, value]) => (
        <tr key={key}>
          <td className='ab-details-title'>
            {key}
          </td>
          <td className='ab-details-info'>
            {value}
          </td>
        </tr>
    ))
  }

  renderSidebar() {
    const { phone, addPhoneToBasket } = this.props;

    return (
        <div>
          <p>Quick Shop</p>
          <BasketCart />
          <div>
            <h1>{phone.name}</h1>
            <h2>{phone.price}</h2>
          </div>
          <Link to='/'>Home</Link>
          <Button onClick={() => addPhoneToBasket(phone.id)}>
            Add to cart
          </Button>
        </div>
    )
  }

  render() {
    const { phone } = this.props;

    return (
        <Container className="main">
          <Grid>
            <Grid.Column width={12}>
              {phone && this.renderContent()}
            </Grid.Column>
            <Grid.Column width={4}>
              {phone && this.renderSidebar()}
            </Grid.Column>
          </Grid>
        </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
};

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
