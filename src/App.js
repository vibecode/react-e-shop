import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './containers/layout';
import Phone from './containers/phone';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Route path="/" exact component={Layout} />
          <Route path="/phones/:id" component={Phone} />
        </div>
    );
  }
}

export default App;
