import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import StackPanel from '../../components/StackPanel/StackPanel';
import MainContent from '../../components/MainContent/MainContent';
import { getStyle } from './About.style';
import { Text, Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';

class About extends Component {
  render() {
    const classNames = getStyle();
    return (
      <StackPanel className={classNames.aboutWrapper}>
        <Banner title="About" subTitle="Who am I?" />
        <MainContent hasPadding={true} isChild={true}>
          <StackPanel isHorizontal={true} style={{height: '100%'}}>
            <StackPanel className={classNames.InfoWrapper}>
              <div className={classNames.onwerImage}></div>
              <Text variant="xxLarge">{this.context.name}</Text>
              <Text variant="Large" className={classNames.slogan}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Text>
            </StackPanel>
            <StackPanel className={classNames.pivotWrapper}>
              <Pivot linkSize={PivotLinkSize.large}>
                <PivotItem headerText="Giới thiệu">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </PivotItem>
                <PivotItem headerText="Kỹ năng">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </PivotItem>
                <PivotItem headerText="Thông tin liên hệ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </PivotItem>
              </Pivot>
            </StackPanel>
          </StackPanel>
        </MainContent>
      </StackPanel>
    );
  }
}
About.contextType = AppContext;

export default About;