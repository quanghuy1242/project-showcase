import React, { Component } from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import MainApp from './components/MainApp/MainApp';
import MainContent from './components/MainContent/MainContent';
import Home from './components/Page/Home/Home';
import './App.css';

class App extends Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <MainApp>
          <MainContent>
            <Home />
          </MainContent>
        </MainApp>
      </Customizer>
    );
  }
}

export default App;
