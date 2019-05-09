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
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'https://google.com',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }
      ]
    };
  }
  render() {
    return (
      <Customizer {...FluentCustomizations}>
        <MainApp>
          <NavSide />
          <MainContent>
            <div className="MainContentInner">
              <Banner />
              <MainContent hasPadding={true}>
                <ProjectCollection
                  title="Title Sample Project"
                  projects={this.state.projects}
                />
              </MainContent>
            </div>
          </MainContent>
        </MainApp>
      </Customizer>
    );
  }
}

export default App;
