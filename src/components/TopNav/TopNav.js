import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton, CommandButton } from 'office-ui-fabric-react/lib/Button';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';
import { Stack } from 'office-ui-fabric-react';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '/' },
      ]
    };
  }

  render() {
    const classNames = getStyle();
    return (
      <Stack verticalAlign="center" horizontal className={classNames.topNav}>
        <Stack.Item>
          <IconButton
            iconProps={{iconName: "GlobalNavButton"}} 
            className={classNames.toggleSideBar}
            style={{color: 'black', marginRight: '0.5rem'}}
            onClick={this.props.onToggleSideBar} 
          />
        </Stack.Item>
        <Stack.Item>
          <NavLink href="/">
            <Text variant="xLarge">Project Showcase</Text>
          </NavLink>
        </Stack.Item>
        <Stack.Item grow disableShrink>
          <Stack horizontal horizontalAlign="end">
            <CommandButton
              text="Find me"
              menuProps={{
                className: classNames.findMeButtonMenu,
                styles: { root: { zIndex: 1001 } },
                items: [
                  { key: 'fb', text: "Facebook", iconProps: { iconName: 'facebook' } },
                  { key: 'tw', text: "Twitter", iconProps: { iconName: 'twitter' } },
                  { key: 'ig', text: "Instagram", iconProps: { iconName: 'instagram' } },
                  { key: 'wp', text: "Wordpress", iconProps: { iconName: 'wordpress' } },
                  { key: 'gh', text: "Github", iconProps: { iconName: 'github' } },
                ]
              }}
            />
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}

export default TopNav;