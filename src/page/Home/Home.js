import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';
import { ProjectAPI } from '../../api/projects.api';
import { getStyle } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      isLoading: false
    };
  }

  onToggleLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  async componentDidMount() {
    this.onToggleLoading();
    const projects = await ProjectAPI.getProjects();
    this.setState({ projects: projects });
    this.onToggleLoading();
  }

  render() {
    const classNames = getStyle();
    return (
      <StackPanel className={classNames.homeWrapper}>
        <Banner title="Project Showcase" subTitle="How my own world begin" />
        <MainContent hasPadding={true} isChild={true} style={{backgroundColor: '#fcfcfc'}}>
          <ProjectCollection
            title="Projects List"
            projects={this.state.projects}
            isLoading={this.state.isLoading}
          />
        </MainContent>
      </StackPanel>
    );
  }
}

export default Home;