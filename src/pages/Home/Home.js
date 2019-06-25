import React, { Component } from 'react';
import ProjectCollection from '../../components/ProjectCollection/ProjectCollection';
import MainContent from '../../components/MainContent/MainContent';
import { ProjectAPI } from '../../api/projects.api';
import { getStyle } from './Home.style';
import { Helmet } from 'react-helmet';
import { Stack, Image, ImageFit, css, Text } from 'office-ui-fabric-react';

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
    const projects = await ProjectAPI.getProjects(true);
    this.setState({ projects: projects });
    this.onToggleLoading();
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack className={classNames.homeWrapper}>
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
        <div className={classNames.imageWrapper}>
          <Image
            src="https://raw.githubusercontent.com/quanghuy1242/MyLibary/master/images/2019/5/20/photo-1517511620798-cec17d428bc0.jpg"
            alt="image"
            height={250}
            imageFit={ImageFit.cover}
            className={classNames.image}
          />
          <Stack className={css("detail")} horizontalAlign="center" verticalAlign="center">
            <Text variant="superLarge" className={classNames.headerText}>Project Showcase</Text>
            <Text variant="xLarge" className={classNames.headerText}>How my own world begins</Text>
          </Stack>
        </div>
        <MainContent isChild={true}>
          <ProjectCollection
            title="Projects List"
            projects={this.state.projects}
            isLoading={this.state.isLoading}
          />
        </MainContent>
      </Stack>
    );
  }
}

export default Home;