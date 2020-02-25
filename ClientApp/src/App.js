import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import  Home  from './components/Home';
import  Bikes  from './components/Bikes';
import Posts  from './components/Posts';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'
import Jobs from './components/Jobs';
import Roles from './components/Roles';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={() => <Home />} />
            <Route path='/posts' component={() => <Posts />} />
            <Route path='/roles' component={() => <Roles />} />

            <AuthorizeRoute path='/bikes' component={() => <Bikes />} />
            <AuthorizeRoute path='/jobs' component={() => <Jobs />} />

            <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}
