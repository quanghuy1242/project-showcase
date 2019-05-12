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
import { style } from './ProjectDetail.style'

class ProjectDetail extends Component {
  render() {
    return (
      <MainContent hasPadding={true} isChild={true}>
        <StackPanel>
          <div className={style.topDetail}>
            <div className={style.topDetailImage}></div>
            <div className={style.topDetailInfo}>
              <div className={style.topDetailTitle}>
                <Text variant="xxLarge">Project Name</Text>
              </div>
              <div className={style.topDetailProjectId}>
                <Text variant="xLarge">{this.props.match.params.id}</Text>
              </div>
            </div>
            <div className="spacer"></div>
            <div className={style.topDetailAction}>
              <PrimaryButton
                text="Open"
                split={true}
                onClick={() => {}}
                menuProps={{
                  items: [
                    {
                      key: 'emailMessage',
                      text: 'Email message',
                      iconProps: { iconName: 'Mail' }
                    },
                    {
                      key: 'calendarEvent',
                      text: 'Calendar event',
                      iconProps: { iconName: 'Calendar' }
                    }    
                  ],
                  alignTargetEdge: true
                }}
              />
            </div>
          </div>
          <div className={style.pivotWrapper}>
            <Pivot linkSize={PivotLinkSize.large}>
              <PivotItem headerText="Description">
                Nội dung 1
              </PivotItem>
              <PivotItem headerText="Screenshots">
                Nội dung 2
              </PivotItem>
            </Pivot>
          </div>
        </StackPanel>
      </MainContent>
    );
  }
}

export default ProjectDetail;