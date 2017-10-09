import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById } from '../../actions';
import { getPhoneById } from '../../selectors';
import { Container, Grid, Image } from 'semantic-ui-react';
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
    console.log(phone);

    const columnFields = R.compose(
        R.toPairs,
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
    return (
        <div>Sidebar</div>
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
  fetchPhoneById
};

export default connect(mapStateToProps, mapDispatchToProps)(Phone);
