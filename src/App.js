import React, { Component } from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import MainApp from './components/MainApp/MainApp';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './components/RouteContainer/RouteContainer';
import AppContextProvider from './context/AppContextProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <AppContextProvider>
          <Router>
            <MainApp>
              <MainContent>
                <RouteContainer />
              </MainContent>
            </MainApp>
          </Router>
        </AppContextProvider>
      </Customizer>
    );
  }
}

export default App;
