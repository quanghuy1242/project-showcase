import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Text } from 'office-ui-fabric-react/lib/Text';
import './ProjectCollection.css';

class ProjectCollection extends Component {
  render() {
    return (
      <div className="ProjectCollectionWrapper">
        <Text variant="xLarge" className="title">{this.props.title}</Text>
        <div className="ProjectCollection">
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