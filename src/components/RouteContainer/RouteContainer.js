import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../../page/Home/Home';
import Banner from '../Banner/Banner';

class RouteContainer extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/categories" component={Banner} />
        <Route path="/about" component={Banner} />
      </div>
    );
  }
}

export default RouteContainer;