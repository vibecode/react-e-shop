import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPhones } from '../../actions';
import { getPhones } from '../../selectors';

import R from 'ramda';

import { Grid, Card, Button, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones();
  }

  renderPhone(phone, index) {
    //R.take
    //Returns the first n elements of the given list, string,
    //or transducer/transformer (or object with a take method).

    //Dispatches to the take method of the second argument, if present.

    //R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
    //R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
    //R.take(3, 'ramda');               //=> 'ram'
    const shortDescription = `${R.take(60, phone.description)}...`;

    return (
        <Grid.Column key={index}>
          <Card>
            <Image
                src={phone.image}
                alt={phone.name}
            />
            <Card.Content>
              <h4 className="ui header">${phone.price}</h4>

              <Link className="header" to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>

              <Card.Description>{shortDescription}</Card.Description>

              <Link to={`/phones/${phone.id}`}>
                More info
              </Link>
            </Card.Content>
            <Card.Content extra>
              <Button
                  className={"ui"}
                  primary
                  inverted
                  fluid
                  color={'green'}
              >
                Buy Now!
              </Button>
            </Card.Content>
          </Card>
        </Grid.Column>
    )
  }


  render() {
    const { phones } = this.props;

    return (
        <Grid className="padded" columns={3}>
          {phones.map((phone, index) => this.renderPhone(phone, index))}
        </Grid>
    );
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
});

const mapDispatchToProps = {
  fetchPhones
};

export default connect(mapStateToProps, mapDispatchToProps)(Phones);