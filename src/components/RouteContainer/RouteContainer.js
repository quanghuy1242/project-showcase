import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import About from '../../pages/About/About';
import ProjectDetail from '../../pages/ProjectDetail/ProjectDetail';
import Categories from '../../pages/Categories/Categories';
import CategoryDetail from '../../pages/CategoryDetail/CategoryDetail';

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