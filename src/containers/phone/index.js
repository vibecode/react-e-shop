import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPhoneById, addPhoneToBasket } from '../../actions'
import { getPhoneById } from '../../selectors'
import { Grid, Image, Button, Icon, Table } from 'semantic-ui-react'
import { toPairs, pick, compose } from 'ramda'

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById(this.props.match.params.id)
  }

  renderContent() {
    const { phone } = this.props

    return (
      <Grid>
        <Grid.Column width={6}>
          <Image bordered shape="rounded" src={phone.image} alt={phone.name} />
        </Grid.Column>

        <Grid.Column width={10}>
          <Table definition>
            <Table.Body>{this.renderFields()}</Table.Body>
          </Table>
        </Grid.Column>

        <Grid.Row>
          <Grid.Column>
            <h4>{phone.name}</h4>
            <p>{phone.description}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  renderFields() {
    const { phone } = this.props

    //R.compose
    //Performs right-to-left function composition.
    //The rightmost function may have any arity;
    //the remaining functions must be unary.
    //Note: The result of compose is not automatically curried.
    const columnFields = compose(
      toPairs,
      //R.pick
      //Returns a partial copy of an object containing only the keys specified.
      // If the key does not exist, the property is ignored.
      pick(['cpu', 'camera', 'size', 'weight', 'display', 'battery', 'memory'])
    )(phone)

    return columnFields.map(([key, value]) => (
      <Table.Row key={key}>
        <Table.Cell>{key}</Table.Cell>
        <Table.Cell>{value}</Table.Cell>
      </Table.Row>
    ))
  }

  renderSidebar() {
    const { phone, addPhoneToBasket } = this.props

    return (
      <div>
        <h1>{phone.name}</h1>
        <h2>${phone.price}</h2>

        <Button
          fluid
          animated="vertical"
          color="green"
          onClick={() => addPhoneToBasket(phone.id)}
        >
          <Button.Content hidden>Add to cart</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    )
  }

  render() {
    const { phone } = this.props

    return (
      <Grid>
        <Grid.Column width={12}>{phone && this.renderContent()}</Grid.Column>
        <Grid.Column width={4}>{phone && this.renderSidebar()}</Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: getPhoneById(state, state.phonePage.id)
  }
}

const mapDispatchToProps = {
  fetchPhoneById,
  addPhoneToBasket
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phone)
