import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../page/Home/Home';
import Banner from '../Banner/Banner';
import NotFound from '../../page/NotFound/NotFound';
import About from '../../page/About/About';

class RouteContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={Banner} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default RouteContainer;