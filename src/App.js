import React, { Component } from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import MainApp from './components/MainApp/MainApp';
import NavSide from './components/Nav/NavSide';
import MainContent from './components/MainContent/MainContent';
import Banner from './components/Banner/Banner';
import ProjectCollection from './components/ProjectCollection/ProjectCollection';
import './App.css';

class App extends Component {
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <MainApp>
          <NavSide />
          <MainContent>
            <div className="MainContentInner">
              <Banner />
              <MainContent hasPadding={true}>
                <ProjectCollection />
              </MainContent>
            </div>
          </MainContent>
        </MainApp>
      </Customizer>
    );
  }
}

export default App;
