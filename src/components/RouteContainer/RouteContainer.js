import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react';
const Projects = lazy(() => import('../../pages/Projects/Projects'));
const Home = lazy(() => import('../../pages/Home/Home'));
const NotFound = lazy(() => import('../../pages/NotFound/NotFound'));
const About = lazy(() => import('../../pages/About/About'));
const ProjectDetail = lazy(() => import('../../pages/ProjectDetail/ProjectDetail'));
const Categories = lazy(() => import('../../pages/Categories/Categories'));
const CategoryDetail = lazy(() => import('../../pages/CategoryDetail/CategoryDetail'));

class RouteContainer extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <Spinner size={SpinnerSize.large} style={{ height: '100%' }} />
        }
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/project/:id" component={ProjectDetail} />
          <Redirect from="/projects/:id" to="/project/:id" />
          <Route path="/categories" exact component={Categories} />
          <Route path="/categories/:nameId" component={CategoryDetail} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    );
  }
}

export default RouteContainer;