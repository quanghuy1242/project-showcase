import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';
import { ProjectAPI } from '../../api/projects.api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  async componentDidMount() {
    const projects = await ProjectAPI.getProjects();
    this.setState({ projects: projects });
  }

  render() {
    return (
      <StackPanel>
        <Banner title="Project Showcase" subTitle="How my own world begin" />
        <MainContent hasPadding={true} isChild={true} style={{backgroundColor: '#fcfcfc'}}>
          <ProjectCollection
            title="Projects List"
            projects={this.state.projects}
          />
        </MainContent>
      </StackPanel>
    );
  }
}

export default Home;