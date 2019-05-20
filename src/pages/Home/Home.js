import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';
import { ProjectAPI } from '../../api/projects.api';
import { getStyle } from './Home.style';
import { Helmet } from 'react-helmet';

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
        <Helmet>
          <title>Home - Project Showcase</title>
          <meta name="keywords" content="Project showcase Home" />
          <meta name="description" content="Project Showcase" />
          <meta property="og:title" content="Home - Project Showcase" />
          <meta property="og:url" content="https://project-showcase.netlify.com/" />
          <meta property="og:image" content="https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg" />
          <meta property="og:image:alt" content="Project Showcase" />
          <meta property="og:description" content="How my own world begins" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Home - Project Showcase" />
          <meta name="twitter:text:title" content="Home - Project Showcase" />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg" />
          <meta name="twitter:image:alt" content="Project Showcase" />
          <meta name="twitter:description" content="How my own world begins" />
        </Helmet>
        <Banner title="Project Showcase" subTitle="How my own world begins" />
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