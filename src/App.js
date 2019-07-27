import React, { Component } from 'react';
import MainApp from './components/MainApp/MainApp';
import MainContent from './components/MainContent/MainContent';
import { BrowserRouter as Router } from 'react-router-dom';
import RouteContainer from './components/RouteContainer/RouteContainer';
import AppContextProvider from './context/AppContextProvider';
import { Helmet } from 'react-helmet';
import { Fabric, registerIcons } from 'office-ui-fabric-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWordpress, faGithub } from '@fortawesome/free-brands-svg-icons';

registerIcons({
  icons: {
    'facebook': <FontAwesomeIcon icon={faFacebookF} />,
    'twitter': <FontAwesomeIcon icon={faTwitter} />,
    'instagram': <FontAwesomeIcon icon={faInstagram} />,
    'wordpress': <FontAwesomeIcon icon={faWordpress} />,
    'github': <FontAwesomeIcon icon={faGithub} />
  }
});

class App extends Component {
  render() {
    return (
      <Fabric>
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
      </Fabric>
    );
  }
}

export default App;
