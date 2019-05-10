import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../page/Home/Home';
import Banner from '../Banner/Banner';
import NotFound from '../../page/NotFound/NotFound';

class RouteContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={Banner} />
        <Route path="/about" component={Banner} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default RouteContainer;