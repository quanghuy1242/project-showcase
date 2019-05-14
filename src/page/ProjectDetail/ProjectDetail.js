import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import StackPanel from '../../components/StackPanel/StackPanel';
import {
  Text,
  Pivot,
  PivotItem,
  PivotLinkSize,
  PrimaryButton
} from 'office-ui-fabric-react';
import { getstyle } from './ProjectDetail.style'
import { ProjectAPI } from '../../api/projects.api';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {}
    };
  }

  async componentDidMount() {
    try {
      const project = await ProjectAPI.getProject(this.props.match.params.id);
      this.setState({
        project: project
      });
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    const classNames = getstyle({
      image: this.state.project.image
    });
    return (
      <MainContent hasPadding={true} isChild={true}>
        <StackPanel>
          <div className={classNames.topDetail}>
            <div className={classNames.topDetailImage} />
            <div className={classNames.topDetailInfo}>
              <div className={classNames.topDetailTitle}>
                <Text variant="xxLarge">{this.state.project.name}</Text>
              </div>
              <div className={classNames.topDetailProjectId}>
                <Text variant="xLarge">{this.state.project._id}</Text>
              </div>
            </div>
            <div className="spacer" />
            <div className={classNames.topDetailAction}>
              <PrimaryButton
                text="Open"
                split={true}
                onClick={() => {
                  window.open(this.state.project.url, '_blank');
                }}
                menuProps={{
                  items: [
                    {
                      key: 'copyUrl',
                      text: 'Copy link',
                      iconProps: { iconName: 'Copy' }
                    },
                    {
                      key: 'shareFacebook',
                      text: 'Share link',
                      iconProps: { iconName: 'Share' }
                    }
                  ],
                  alignTargetEdge: true
                }}
              />
            </div>
          </div>
          <div className={classNames.pivotWrapper}>
            <Pivot linkSize={PivotLinkSize.large}>
              <PivotItem headerText="Description">
                <div className={classNames.pivotItem}>
                  {this.state.project.description}
                </div>
              </PivotItem>
              <PivotItem headerText="Screenshots">
                <div className={classNames.pivotItem}>
                  {this.state.project.screenshots
                    ? this.state.project.screenshots.map(
                        (screenshot, index) => (
                          <img src={screenshot} key={index} alt="Hmmmm" className={classNames.screenshot} />
                        )
                      )
                    : (<div>Không có ảnh chụp màn hình</div>)}
                </div>
              </PivotItem>
            </Pivot>
          </div>
        </StackPanel>
      </MainContent>
    );
  }
}

export default ProjectDetail;