import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Phones from '../phones';
import Sidebar from '../../components/sidebar';
import { Container, Grid } from 'semantic-ui-react';

const Layout = () => (
      <Grid>
        <Grid.Column width={4}>
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={12}>
          <Switch>
            <Route path="/" exact component={Phones} />
            <Route path="/categories/:id" component={Phones} />
          </Switch>
        </Grid.Column>
      </Grid>
);

export default Layout;