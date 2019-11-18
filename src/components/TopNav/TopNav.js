import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton, CommandButton } from 'office-ui-fabric-react/lib/Button';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { AppContext } from '../../context/AppContext';
import { Callout, List } from 'office-ui-fabric-react';
import { mergeStyleSets } from '@uifabric/styling';
import { CommunicationColors } from '@uifabric/fluent-theme';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '/' },
      ],
      isSearchBoxShow: false,
      isSuggestionHide: true,
      searchContent: ''
    };
    this.searchBoxRef = React.createRef();
  }

  setIsSuggestionHide(bool) {
    this.setState({ isSuggestionHide: bool });
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
                    <>
                      <div ref={this.searchBoxRef}>
                        <SearchBox
                          className={classNames.searchBox}
                          autoFocus={true}
                          onChange={e => {
                            if (e) {
                              e.target.value.trim() !== ''
                                ? this.setIsSuggestionHide(false)
                                : this.setIsSuggestionHide(true);
                              this.setState({ searchContent: e.target.value });
                            }
                          }}
                        />
                      </div>
                      <Callout
                        hidden={this.state.isSuggestionHide}
                        target={this.searchBoxRef.current}
                        isBeakVisible={false}
                        gapSpace={2}
                      >
                        <Stack
                          verticalAlign="center"
                          style={{
                            height: 40,
                            padding: '0.25rem 1rem 0 1rem',
                            borderBottom: '1px solid rgb(237, 235, 233)'
                          }}
                        >
                          <Text variant="medium" style={{ color: CommunicationColors.primary }}>Result</Text>
                        </Stack>
                        <List
                          style={{ width: 260 }}
                          items={[
                            { content: 'Đây là cái số 1' },
                            { content: 'Và đây là cái số 2' },
                            { content: 'Cái số 3 đây nè' },
                            { content: 'Ủa cái số 4 đâu rồi?' },
                            { content: 'Số 5! Cái số 4 núp rồi' }
                          ]}
                          onRenderCell={(item, index) => {
                            const styles = mergeStyleSets({
                              cell: {
                                height: 32,
                                padding: '0 1rem',
                                cursor: 'pointer',
                                selectors: {
                                  "&:hover": {
                                    backgroundColor: 'rgb(243, 242, 241)',
                                    color: 'rgb(32, 31, 30)'
                                  },
                                  "&:active": {
                                    backgroundColor: 'rgb(237, 235, 233)'
                                  }
                                }
                              }
                            });
                            return (
                              <Stack
                                key={index}
                                className={styles.cell}
                                verticalAlign="center"
                              >
                                {item.content}
                              </Stack>
                            );
                          }}
                        />
                      </Callout>
                    </>
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
                    isSearchBoxShow: false,
                    isSuggestionHide: true
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