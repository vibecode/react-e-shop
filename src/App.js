import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './containers/layout';
import Phone from './containers/phone';
import Basket from './containers/basket';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/phones/:id" component={Phone} />
            <Route path='/basket' component={Basket} />
            <Route path="/" component={Layout} />
          </Switch>
        </div>
    );
  }
}

export default App;
