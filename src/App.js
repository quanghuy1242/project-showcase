import React, { Component } from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import MainApp from './components/MainApp/MainApp';
import MainContent from './components/MainContent/MainContent';
import Home from './components/Page/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';

class App extends Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <Router>
          <MainApp>
            <MainContent>
              <Route path="/" exact component={Home} />
              <Route path="/categories" component={Banner} />
              <Route path="/about" component={Banner} />
            </MainContent>
          </MainApp>
        </Router>
      </Customizer>
    );
  }
}

export default App;
