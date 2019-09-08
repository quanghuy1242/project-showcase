import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton, CommandButton } from 'office-ui-fabric-react/lib/Button';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { AppContext } from '../../context/AppContext';

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
      <Stack verticalAlign='center' horizontal className={classNames.topNav}>
        {!this.state.isSearchBoxShow ? (
          <>
            <Stack.Item>
              <IconButton
                iconProps={{ iconName: 'GlobalNavButton' }}
                className={classNames.toggleSideBar}
                style={{ color: 'black', marginRight: '0.5rem' }}
                onClick={this.props.onToggleSideBar}
              />
            </Stack.Item>
            <Stack.Item>
              <NavLink href='/'>
                <Text variant='xLarge'>Showcase</Text>
              </NavLink>
            </Stack.Item>
          </>
        ) : (
          <></>
        )}
        <Stack.Item grow disableShrink>
          <Stack horizontal verticalAlign='center'>
            <Stack.Item disableShrink grow>
              <Stack horizontal verticalAlign='center'>
                <Stack.Item disableShrink grow>
                  {this.state.isSearchBoxShow ? (
                    <SearchBox className={classNames.searchBox} />
                  ) : (
                    <></>
                  )}
                </Stack.Item>
                {this.state.isSearchBoxShow || (
                  <CommandButton
                    iconProps={{
                      iconName: this.state.isSearchBoxShow
                        ? 'Cancel'
                        : 'Search',
                      styles: { root: { color: 'black' } }
                    }}
                    onClick={() => {
                      this.setState({
                        isSearchBoxShow: !this.state.isSearchBoxShow
                      });
                    }}
                  />
                )}
              </Stack>
            </Stack.Item>
            {!this.state.isSearchBoxShow ? (
              <CommandButton
                className={classNames.findMeButton}
                iconProps={{ iconName: 'World' }}
                text='Find me'
                menuProps={{
                  className: classNames.findMeButtonMenu,
                  styles: { root: { zIndex: 1001 } },
                  items: [
                    {
                      key: 'fb',
                      text: 'Facebook',
                      iconProps: { iconName: 'facebook' },
                      href: this.context.administrator.facebook,
                      target: '_blank'
                    },
                    {
                      key: 'tw',
                      text: 'Twitter',
                      iconProps: { iconName: 'twitter' },
                      href: this.context.administrator.twitter,
                      target: '_blank'
                    },
                    {
                      key: 'ig',
                      text: 'Instagram',
                      iconProps: { iconName: 'instagram' },
                      href: this.context.administrator.instagram,
                      target: '_blank'
                    },
                    {
                      key: 'wp',
                      text: 'Wordpress',
                      iconProps: { iconName: 'wordpress' },
                      href: this.context.administrator.wordpress,
                      target: '_blank'
                    },
                    {
                      key: 'gh',
                      text: 'Github',
                      iconProps: { iconName: 'github' },
                      href: this.context.administrator.github,
                      target: '_blank'
                    }
                  ]
                }}
              />
            ) : (
              <></>
            )}
            {this.state.isSearchBoxShow ? (
              <div
                className={classNames.overlay}
                onClick={() => {
                  this.setState({
                    isSearchBoxShow: !this.state.isSearchBoxShow
                  });
                }}
              ></div>
            ) : null}
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}

TopNav.contextType = AppContext;

export default TopNav;