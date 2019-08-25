import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { style } from './ProjectCollection.style';
import { Spinner, SpinnerSize, Stack, IconButton, TooltipHost } from 'office-ui-fabric-react';

class ProjectCollection extends Component {
  render() {
    return (
      <div className={style.projectCollectionWrapper}>
        <Stack horizontal>
          <Stack.Item grow disableShrink>
            <Text variant="xLarge" className={style.headerText}>{this.props.title}</Text>
          </Stack.Item>
          <Stack>
            <TooltipHost content='Filter'>
              <IconButton
                iconProps={{ iconName: 'PageListFilter', styles: { root: { color: 'black' } } }}
                onRenderMenuIcon={() => false}
                menuProps={{
                  items: [
                    {
                      key: '1',
                      text: 'Sort by Name',
                      iconProps: { iconName: 'HalfAlpha' }
                    },
                    {
                      key: '2',
                      text: 'Sort by Date',
                      iconProps: { iconName: 'EventDate' }
                    }
                  ]
                }}
              />
            </TooltipHost>
          </Stack>
        </Stack>
        {
          this.props.isLoading
            ? <Spinner size={SpinnerSize.large} />
            : this.props.projects.length
              ? (<div className={style.projectCollection}>
                  {this.props.projects.map((project, index) => (
                    <ProjectItem
                      name={project.name}
                      href={project.href}
                      image={project.image}
                      date={project.date}
                      technology={project.technology.name}
                      _id={project._id}
                      key={index}
                    />
                  ))}
                </div>)
              : <Text>Không có project nào! Hãy quay trở lại sau!</Text>
              
        }
      </div>
    );
  }
}

export default ProjectCollection;