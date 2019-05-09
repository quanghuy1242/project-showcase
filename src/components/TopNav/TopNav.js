import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton } from 'office-ui-fabric-react/lib/Button';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';
import './TopNav.css'

class TopNav extends Component {
  render() {
    return (
      <div className="TopNav" style={{boxShadow: Depths.depth8}}>
        <IconButton iconProps={{iconName: "GlobalNavButton"}} className="ToggleSideBar" />
        <Text variant="xxLarge">Project Showcase</Text>
      </div>
    );
  }
}

export default TopNav;