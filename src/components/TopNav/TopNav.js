import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton, CommandButton } from 'office-ui-fabric-react/lib/Button';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';
import { Stack, SearchBox } from 'office-ui-fabric-react';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '/' },
      ],
      isSearchBoxShow: false
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
          {!this.state.isSearchBoxShow
            ? (
              <NavLink href="/">
                <Text variant="xLarge">Showcase</Text>
              </NavLink>
            )
            : <></>}
        </Stack.Item>
        <Stack.Item grow disableShrink>
          <Stack horizontal verticalAlign='center'>
            <Stack.Item disableShrink grow>
              <Stack horizontal verticalAlign='center'>
                <Stack.Item disableShrink grow>
                  {this.state.isSearchBoxShow ? <SearchBox className={classNames.searchBox} /> : <></>}
                </Stack.Item>
                <CommandButton
                  iconProps={{
                    iconName: this.state.isSearchBoxShow ? 'Cancel' : 'Search',
                    styles: { root: { color: 'black' } } 
                  }}
                  onClick={() => {
                    this.setState({ isSearchBoxShow: !this.state.isSearchBoxShow })
                  }}
                />
              </Stack>
            </Stack.Item>
            <CommandButton
              className={classNames.findMeButton}
              iconProps={{ iconName: 'World' }}
              onRenderMenuIcon={() => false}
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