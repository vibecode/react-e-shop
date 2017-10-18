import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Phones from '../phones';
import Categories from '../categories';
import { Grid } from 'semantic-ui-react';

const HomePage = () => (
    <Grid>
      <Grid.Column width={4}>
        <Categories />
      </Grid.Column>
      <Grid.Column width={12}>
        <Switch>
          <Route path="/" exact component={Phones} />
          <Route path="/categories/:id" component={Phones} />
        </Switch>
      </Grid.Column>
    </Grid>
);

export default HomePage;