import React from 'react';
import { Route } from 'react-router-dom';
import Phones from '../phones';
import Sidebar from '../../components/sidebar';
import { Container, Grid } from 'semantic-ui-react';

const Layout = ({children}) => (
  <Container className="main">
    <Grid>
      <Grid.Column width={4}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column width={12}>
        {children}
        <Route component={Phones} />
        <Route path='/categories/:id' component={Phones}/>
      </Grid.Column>
    </Grid>
  </Container>);

export default Layout;