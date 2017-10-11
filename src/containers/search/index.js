import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
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
      value: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.searchPhone(this.state.value);
  }

  render() {
    return (
        <div>
          <h3 className='lead'>Quick shop</h3>
          <div>
            <form onSubmit={this.handleSubmit}>
              <Input
                  onChange={this.handleChange}
                  type='text'
                  className='form-control'
              />
              <Button>Search</Button>
            </form>
          </div>
        </div>
    )
  }
}

const mapDispatchToProps = {
  searchPhone
};

export default connect(null, mapDispatchToProps)(Search);