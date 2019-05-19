import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import StackPanel from '../../components/StackPanel/StackPanel';
import MainContent from '../../components/MainContent/MainContent';
import { getStyle } from './About.style';
import { Text, Pivot, PivotItem, PivotLinkSize } from 'office-ui-fabric-react';
import { AppContext } from '../../context/AppContext';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHorizontal: true,
      isMounted: false
    };
  }

  componentDidMount() {
    this.setState({ isMounted: true });
    window.addEventListener('resize', this.handleScreenResize.bind(this), false);
  }

  componentWillUnmount() {
    this.setState({ isMounted: false });
    window.removeEventListener('resize', this.handleScreenResize.bind(this), false);
  }

  handleScreenResize() {
    if (this.state.isMounted) {
      this.setState({
        isHorizontal: !window.matchMedia("(max-width: 599px)").matches
      });
    }
  }

  render() {
    const classNames = getStyle({image: this.context.administrator.image});
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    return (
      <StackPanel className={classNames.aboutWrapper}>
        <Banner title="About" subTitle="Who am I?" />
        <MainContent hasPadding={true} isChild={true} className={classNames.aboutWrapperInner}>
          <StackPanel isHorizontal={!isMobile} style={{height: '100%'}}>
            <StackPanel className={classNames.InfoWrapper}>
              <div className={classNames.onwerImage}></div>
              <Text variant="xxLarge">{this.context.administrator.name}</Text>
              <Text variant="Large" className={classNames.slogan}>
                {this.context.administrator.slogan}
              </Text>
            </StackPanel>
            <StackPanel className={classNames.pivotWrapper}>
              <Pivot linkSize={PivotLinkSize.large}>
                <PivotItem headerText="Giới thiệu" className={classNames.pivotItems}>
                  {this.context.administrator.introduction}
                </PivotItem>
                <PivotItem headerText="Kỹ năng" className={classNames.pivotItems}>
                  {this.context.administrator.skill}
                </PivotItem>
                <PivotItem headerText="Thông tin liên hệ" className={classNames.pivotItems}>
                  {this.context.administrator.contact}
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