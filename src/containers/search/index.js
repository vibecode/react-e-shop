import React, { Component } from 'react';
import { Button, Input, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchPhone } from '../../actions';

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (ev) {
    this.setState({
      value: ev.target.value.trim()
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.searchPhone(this.state.value.toLowerCase());
  }

  render() {
    return (
            <form onSubmit={this.handleSubmit}>
              <Input
                  fluid
                  onChange={this.handleChange}
                  type="text"
                  action="Search"
                  placeholder='Search...'
              />
            </form>
    )
  }
}

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);