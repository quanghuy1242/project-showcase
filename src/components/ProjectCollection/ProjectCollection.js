import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { style } from './ProjectCollection.style';

class ProjectCollection extends Component {
  render() {
    return (
      <div className={style.projectCollectionWrapper}>
        <Text variant="xLarge" className={style.headerText}>{this.props.title}</Text>
        <div className={style.projectCollection}>
          {this.props.projects.map((project, index) => (
            <ProjectItem
              name={project.name}
              href={project.href}
              image={project.image}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ProjectCollection;