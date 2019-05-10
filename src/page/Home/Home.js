import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: '/about',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <div className="HomeWrapper">
        <Banner />
        <MainContent hasPadding={true} isChild={true}>
          <ProjectCollection
            title="Title Sample Project"
            projects={this.state.projects}
          />
        </MainContent>
      </div>
    );
  }
}

export default Home;