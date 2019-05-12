import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }, 
        {
          name: 'Project Example',
          href: 'project/123',
          image: 'https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/ima2.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <StackPanel>
        <Banner title="Project Showcase" subTitle="How my own world begin" />
        <MainContent hasPadding={true} isChild={true} style={{backgroundColor: '#fcfcfc'}}>
          <ProjectCollection
            title="Title Sample Project"
            projects={this.state.projects}
          />
        </MainContent>
      </StackPanel>
    );
  }
}

export default Home;