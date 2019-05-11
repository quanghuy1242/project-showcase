import React, { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import StackPanel from '../../components/StackPanel/StackPanel';
import MainContent from '../../components/MainContent/MainContent';

class About extends Component {
  render() {
    return (
      <StackPanel>
        <Banner title="About" subTitle="Who am I?" />
        <MainContent hasPadding={true} isChild={true}>
          Không có gì ở đây cả
        </MainContent>
      </StackPanel>
    );
  }
}

export default About;