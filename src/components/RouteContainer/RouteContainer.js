import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../page/Home/Home';
import NotFound from '../../page/NotFound/NotFound';
import About from '../../page/About/About';
import ProjectDetail from '../../page/ProjectDetail/ProjectDetail';
import Categories from '../../page/Categories/Categories';
import CategoryDetail from '../../page/CategoryDetail/CategoryDetail';

class RouteContainer extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/categories" exact component={Categories} />
        <Route path="/categories/:nameId" component={CategoryDetail} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default RouteContainer;