import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import './ProjectCollection.css';

class ProjectCollection extends Component {
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
      <div className="ProjectCollection">
        {this.state.projects.map((project, index) => (
          <ProjectItem
            name={project.name}
            href={project.href}
            image={project.image}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default ProjectCollection;