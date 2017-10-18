import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './containers/home-page';
import Phone from './containers/phone';
import Basket from './containers/basket';
import BasketCart from './containers/basket-cart';
import Search from './containers/search';
import { Menu, Container, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
        <div>
          <Menu fixed='top'>
            <Container>
              <Link to="/" className="item">Home</Link>
              <Container>
                <Grid padded centered>
                  <Grid.Column>
                    <Search />
                  </Grid.Column>
                </Grid>
              </Container>
              <Menu.Item position={"right"}>
                <BasketCart />
              </Menu.Item>
            </Container>
          </Menu>
          <Container className="main">
            <Switch>
              <Route path="/phones/:id" component={Phone} />
              <Route path='/basket' component={Basket} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Container>
        </div>
    );
  }
}

export default App;
