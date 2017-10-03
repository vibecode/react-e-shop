import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/layout/index';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route component={Layout} />
        </div>
    );
  }
}

export default App;
