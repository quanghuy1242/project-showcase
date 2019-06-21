import React, { Component } from 'react';
import MainApp from './components/MainApp/MainApp';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './components/RouteContainer/RouteContainer';
import AppContextProvider from './context/AppContextProvider';
import { Helmet } from 'react-helmet';

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <Router>
          <MainApp>
            <Helmet>
              <title>Project Showcase!</title>
              <meta property="fb:app_id" content="535340733663959" />
              <meta name="description" content="Project showcase" />
              <meta property="og:type" content="article" />
              <meta name="twitter:site" content="@corysmc" />
              <meta property="og:url" content="https://project-showcase.netlify.com/" />
              <meta property="og:site_name" content="Quang Huy" />
            </Helmet>
            <MainContent>
              <RouteContainer />
            </MainContent>
          </MainApp>
        </Router>
      </AppContextProvider>
    );
  }
}

export default App;
